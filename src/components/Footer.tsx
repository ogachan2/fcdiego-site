// src/components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-neutral-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col items-center gap-6">

        {/* --- ロゴ --- */}
        <div className="flex items-center gap-2">
          <Image
            src="/emblem.PNG"
            alt="F.C. DIEGO emblem"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="font-semibold tracking-wide text-lg">
            F.C. DIEGO
          </span>
        </div>

        {/* --- SNSアイコン --- */}
        <div className="flex items-center gap-4">

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagramへ"
            className="h-10 w-10 flex items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                ry="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="17" cy="7" r="1" fill="currentColor" />
            </svg>
          </Link>

          {/* note */}
          <Link
            href="https://note.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="noteへ"
            className="h-10 w-10 flex items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
            >
              <rect
                x="5"
                y="4"
                width="14"
                height="16"
                rx="2"
                ry="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <polyline
                points="13,4 13,9 18,9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

        </div>

        {/* --- コピーライト --- */}
        <p className="text-xs text-neutral-500 tracking-wide mt-2">
          © 2024–{year} F.C. DIEGO All rights reserved.
        </p>
      </div>
    </footer>
  );
}
