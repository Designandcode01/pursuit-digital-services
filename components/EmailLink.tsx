"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";

interface EmailLinkProps {
  email: string;
  className?: string;
  showCopy?: boolean;
  subject?: string;
  body?: string;
}

export function EmailLink({
  email,
  className,
  showCopy = true,
  subject,
  body,
}: EmailLinkProps) {
  const [copied, setCopied] = useState(false);

  // Build Gmail compose URL — opens in browser, always uses Gmail
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
  });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);

  const gmailHref = `https://mail.google.com/mail/?${params.toString()}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — silently fail
    }
  };

  return (
    <span className="inline-flex items-center gap-2">
      <a
        href={gmailHref}
        target="_blank"
        rel="noopener noreferrer"
        className={
          className ??
          "inline-flex items-center gap-2 text-blue-600 hover:underline"
        }
      >
        <Mail size={16} aria-hidden="true" />
        {email}
      </a>

      {showCopy && (
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Email copied" : "Copy email address"}
          className="inline-flex items-center justify-center rounded-full p-2 text-current opacity-70 transition hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {copied ? (
            <Check size={14} aria-hidden="true" />
          ) : (
            <Copy size={14} aria-hidden="true" />
          )}
        </button>
      )}
    </span>
  );
}