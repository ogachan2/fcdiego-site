// src/components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, NoteIcon } from "@/components/SocialIcons";

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
            F.C.DIEGO
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 transition duration-300 hover:-translate-y-0.5 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
          >
            <InstagramIcon size={20} />
          </Link>

          {/* note */}
          <Link
            href="https://note.com/fcdiego_1993"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="noteへ"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 transition duration-300 hover:-translate-y-0.5 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
          >
            <NoteIcon size={32} />
          </Link>

        </div>

        {/* --- コピーライト --- */}
        <p className="text-xs text-neutral-500 tracking-wide mt-2">
          © 2024–{year} F.C.DIEGO All rights reserved.
        </p>
      </div>
    </footer>
  );
}
