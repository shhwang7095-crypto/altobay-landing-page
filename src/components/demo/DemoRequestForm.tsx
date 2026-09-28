"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

// These are what get submitted (the Notion option names are English); the label
// shown to the visitor comes from the dictionary.
const SERVICE_VALUES = ["Smart Booking", "AI-Generated Service Reports", "Vehicle Cloud Search"];

// The API returns a machine-readable `code` next to its English `error` text so
// the message can be shown in the visitor's language.
type ErrorCode = "not_configured" | "invalid" | "missing" | "submit_failed";

type Status = "idle" | "submitting" | "success" | "error";

export default function DemoRequestForm() {
  const { t } = useLanguage();
  const f = t.demoForm;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [services, setServices] = useState<string[]>([]);

  function toggleService(service: string) {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (services.length === 0) {
      setStatus("error");
      setErrorMessage(f.errSelect);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = { ...Object.fromEntries(new FormData(form).entries()), services };

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const messages: Record<ErrorCode, string> = {
          not_configured: f.errNotConfigured,
          invalid: f.errInvalid,
          missing: f.errMissing,
          submit_failed: f.errSubmit,
        };
        throw new Error(messages[body.code as ErrorCode] ?? f.errGeneric);
      }

      setStatus("success");
      form.reset();
      setServices([]);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : f.errGeneric);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="mt-5 text-xl font-bold">{f.successTitle}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {f.successBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-8 sm:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label={f.name} name="name" required />
        <Field label={f.company} name="company" required />
        <Field label={f.role} name="role" />
        <Field label={f.email} name="email" type="email" required placeholder={f.emailPlaceholder} />
        <Field label={f.phone} name="phone" type="tel" placeholder={f.phonePlaceholder} />
        <Field label={f.region} name="region" placeholder={f.regionPlaceholder} />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-foreground">
          {f.interested} <span className="text-brand-blue">*</span>{" "}
          <span className="font-normal text-muted-foreground">{f.selectAll}</span>
        </label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {SERVICE_VALUES.map((service, i) => (
            <label
              key={service}
              className="flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5 text-sm transition-colors has-[:checked]:border-brand-blue has-[:checked]:bg-brand-blue/5"
            >
              <input
                type="checkbox"
                checked={services.includes(service)}
                onChange={() => toggleService(service)}
                className="accent-brand-blue"
              />
              {t.features.items[i].title}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="message">
          {f.other}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue"
          placeholder={f.otherPlaceholder}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 w-full rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "submitting" ? f.sending : f.send}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-foreground" htmlFor={name}>
        {label} {required && <span className="text-brand-blue">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue"
      />
    </div>
  );
}
