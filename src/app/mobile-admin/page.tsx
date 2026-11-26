"use client";

import { FormEvent, useEffect, useState } from "react";

type Fields = {
  siteName: string;
  phone: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDescription: string;
};

const emptyFields: Fields = {
  siteName: "",
  phone: "",
  heroTitle: "",
  heroTitleHighlight: "",
  heroDescription: "",
};

export default function MobileAdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch("/api/mobile-admin")
      .then((response) => response.json())
      .then((data) => setAuthenticated(Boolean(data.authenticated)))
      .catch(() => setError("Unable to check your session. Refresh and try again."))
      .finally(() => setChecking(false));
  }, []);

  async function submitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/mobile-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "login", password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Sign in failed.");
      setAuthenticated(true);
      setPassword("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed.");
    } finally {
      setBusy(false);
    }
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const response = await fetch("/api/mobile-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "save", fields }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Save failed.");
      setMessage(data.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed.");
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    await fetch("/api/mobile-admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "logout" }),
    });
    setAuthenticated(false);
    setFields(emptyFields);
  }

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  if (checking) return <main className="mobile-admin"><p>Loading secure editor…</p></main>;

  return (
    <main className="mobile-admin">
      <div className="mobile-admin__top">
        <div><span className="mobile-admin__eyebrow">LESEFT MOVING</span><h1>Mobile content editor</h1></div>
        {authenticated && <button className="mobile-admin__quiet" type="button" onClick={logout}>Sign out</button>}
      </div>
      <p className="mobile-admin__intro">Make quick website updates from your phone. Your changes are published directly to the website.</p>

      {!authenticated ? (
        <form className="mobile-admin__panel" onSubmit={submitLogin}>
          <h2>Admin sign in</h2>
          <label htmlFor="admin-password">Admin password</label>
          <input id="admin-password" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          <button className="mobile-admin__submit" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
        </form>
      ) : (
        <form className="mobile-admin__panel" onSubmit={save}>
          <h2>Quick website details</h2>
          <p className="mobile-admin__hint">Leave a field unchanged if you do not want to update it. These fields are saved to Sanity when you tap Publish changes.</p>
          <label htmlFor="site-name">Company name</label>
          <input id="site-name" value={fields.siteName} onChange={(event) => update("siteName", event.target.value)} placeholder="LeSeft Moving" autoComplete="organization" />
          <label htmlFor="phone">Business phone</label>
          <input id="phone" type="tel" inputMode="tel" autoComplete="tel" value={fields.phone} onChange={(event) => update("phone", event.target.value)} placeholder="Enter business phone" />
          <label htmlFor="hero-title">Homepage main title</label>
          <input id="hero-title" value={fields.heroTitle} onChange={(event) => update("heroTitle", event.target.value)} placeholder="Move with Confidence." />
          <label htmlFor="hero-highlight">Homepage highlighted title</label>
          <input id="hero-highlight" value={fields.heroTitleHighlight} onChange={(event) => update("heroTitleHighlight", event.target.value)} placeholder="Arrive with Care." />
          <label htmlFor="hero-description">Homepage description</label>
          <textarea id="hero-description" rows={4} value={fields.heroDescription} onChange={(event) => update("heroDescription", event.target.value)} placeholder="Write a short introduction…" />
          {error && <p className="mobile-admin__error" role="alert">{error}</p>}
          {message && <p className="mobile-admin__success" role="status">{message}</p>}
          <button className="mobile-admin__submit" disabled={busy}>{busy ? "Publishing…" : "Publish changes"}</button>
        </form>
      )}
      {!authenticated && error && <p className="mobile-admin__error" role="alert">{error}</p>}
      <p className="mobile-admin__foot">For full content management, <a href="/studio">open Sanity Studio</a> on a computer.</p>
    </main>
  );
}
