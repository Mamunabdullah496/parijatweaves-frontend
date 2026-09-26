"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/wp";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const result = await submitContactForm(data);
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Could not reach the server. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-md bg-green-50 p-4 text-sm text-green-700">
        Thanks for reaching out! We'll get back to you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          className="rounded border border-gray-300 px-4 py-2 text-sm outline-none focus:border-brand-orange"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          className="rounded border border-gray-300 px-4 py-2 text-sm outline-none focus:border-brand-orange"
        />
      </div>
      <input
        name="subject"
        placeholder="Subject"
        className="w-full rounded border border-gray-300 px-4 py-2 text-sm outline-none focus:border-brand-orange"
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Your message"
        className="w-full rounded border border-gray-300 px-4 py-2 text-sm outline-none focus:border-brand-orange"
      />
      {status === "error" && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded bg-brand-orange px-6 py-2 text-sm font-semibold text-white disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
