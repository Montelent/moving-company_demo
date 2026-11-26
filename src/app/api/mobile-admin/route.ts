import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@sanity/client";

export const runtime = "nodejs";

const COOKIE_NAME = "leseft_mobile_admin";
const SESSION_SECONDS = 60 * 60 * 24 * 7;

function signature(expires: string) {
  const secret = process.env.MOBILE_ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("MOBILE_ADMIN_SESSION_SECRET is not configured");
  return createHmac("sha256", secret).update(expires).digest("hex");
}

function validSession(value?: string) {
  if (!value) return false;
  const [expires, supplied] = value.split(".");
  if (!expires || !supplied || Number(expires) < Math.floor(Date.now() / 1000)) return false;
  const expected = signature(expires);
  const a = Buffer.from(supplied);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

async function requireSession() {
  const store = await cookies();
  return validSession(store.get(COOKIE_NAME)?.value);
}

function sanityClient() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
  const token = process.env.SANITY_API_TOKEN;
  if (!projectId || !token) throw new Error("Sanity project ID or write token is missing");
  return createClient({ projectId, dataset, apiVersion: "2025-01-01", useCdn: false, token });
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.action === "login") {
    const configuredPassword = process.env.MOBILE_ADMIN_PASSWORD;
    if (!configuredPassword || typeof body.password !== "string" || body.password.length > 200) {
      return NextResponse.json({ error: "Mobile editor is not configured." }, { status: 503 });
    }
    const supplied = Buffer.from(body.password);
    const expected = Buffer.from(configuredPassword);
    if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) {
      return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
    }
    try {
      const expires = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS);
      const response = NextResponse.json({ ok: true });
      response.cookies.set(COOKIE_NAME, `${expires}.${signature(expires)}`, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: SESSION_SECONDS,
      });
      return response;
    } catch {
      return NextResponse.json({ error: "Mobile editor session is not configured." }, { status: 503 });
    }
  }

  if (body.action === "logout") {
    const response = NextResponse.json({ ok: true });
    response.cookies.set(COOKIE_NAME, "", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 0 });
    return response;
  }

  if (body.action !== "save" || !(await requireSession())) {
    return NextResponse.json({ error: "Please sign in again." }, { status: 401 });
  }

  const fields = body.fields;
  if (!fields || typeof fields !== "object" || Array.isArray(fields)) {
    return NextResponse.json({ error: "No valid fields were submitted." }, { status: 400 });
  }

  const allowed = ["siteName", "phone", "heroTitle", "heroTitleHighlight", "heroDescription"] as const;
  const clean: Record<string, string> = {};
  for (const key of allowed) {
    const value = (fields as Record<string, unknown>)[key];
    if (value !== undefined) {
      if (typeof value !== "string" || value.length > 2000) {
        return NextResponse.json({ error: `Invalid value for ${key}.` }, { status: 400 });
      }
      clean[key] = value.trim();
    }
  }
  if (!Object.keys(clean).length) return NextResponse.json({ error: "Nothing to save." }, { status: 400 });

  try {
    const client = sanityClient();
    const settingsFields = ["siteName", "phone"].filter((key) => key in clean);
    const homeFields = ["heroTitle", "heroTitleHighlight", "heroDescription"].filter((key) => key in clean);

    if (settingsFields.length) {
      const id = await client.fetch<string | null>('*[_type == "siteSettings"][0]._id');
      const documentId = id || "mobile-site-settings";
      await client.createIfNotExists({ _id: documentId, _type: "siteSettings" });
      await client.patch(documentId).set(Object.fromEntries(settingsFields.map((key) => [key, clean[key]]))).commit();
    }
    if (homeFields.length) {
      const id = await client.fetch<string | null>('*[_type == "homePage"][0]._id');
      const documentId = id || "mobile-home-page";
      await client.createIfNotExists({ _id: documentId, _type: "homePage" });
      await client.patch(documentId).set(Object.fromEntries(homeFields.map((key) => [key, clean[key]]))).commit();
    }
    return NextResponse.json({ ok: true, message: "Changes saved and published." });
  } catch (error) {
    console.error("Mobile admin save failed", error);
    return NextResponse.json({ error: "Could not save to Sanity. Check the write token and try again." }, { status: 500 });
  }
}

export async function GET() {
  try {
    if (!(await requireSession())) return NextResponse.json({ authenticated: false });
    const client = sanityClient();
    const [settings, home] = await Promise.all([
      client.fetch<{ siteName?: string; phone?: string } | null>('*[_type == "siteSettings"][0]{siteName, phone}'),
      client.fetch<{ heroTitle?: string; heroTitleHighlight?: string; heroDescription?: string } | null>('*[_type == "homePage"][0]{heroTitle, heroTitleHighlight, heroDescription}'),
    ]);
    return NextResponse.json({
      authenticated: true,
      fields: {
        siteName: settings?.siteName || "",
        phone: settings?.phone || "",
        heroTitle: home?.heroTitle || "",
        heroTitleHighlight: home?.heroTitleHighlight || "",
        heroDescription: home?.heroDescription || "",
      },
    });
  } catch (error) {
    console.error("Mobile admin session check failed", error);
    return NextResponse.json({ authenticated: false, error: "Mobile editor is not configured correctly." }, { status: 503 });
  }
}
