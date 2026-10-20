"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"BARISTA" | "CAFE_OWNER">("BARISTA");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setError(data?.error ?? "Something went wrong");
      setLoading(false);
      return;
    }

    // Log the new user in straight away
    const loginRes = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    setLoading(false);

    if (!loginRes.ok) {
      router.push("/login");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="mx-auto max-w-sm px-4 py-16">
      <h1 className="mb-6 text-2xl font-semibold">Create your account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded border px-3 py-2"
        />
        <input
          type="password"
          placeholder="Password (min 8 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
          className="w-full rounded border px-3 py-2"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as "BARISTA" | "CAFE_OWNER")}
          className="w-full rounded border px-3 py-2"
        >
          <option value="BARISTA">I&apos;m a barista</option>
          <option value="CAFE_OWNER">I own or manage a cafe</option>
        </select>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-black px-3 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Sign up"}
        </button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Log in
        </Link>
      </p>
    </main>
  );
}
