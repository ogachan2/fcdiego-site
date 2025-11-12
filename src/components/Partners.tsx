"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

type Partner = {
  name: string;
  logo: string;   // 画像パス（/public/partners/〜）
  url: string;    // リンク先URL
};

const DUMMY_PARTNERS: Partner[] = [
  { name: "Company A", logo: "/partners/companyA.png", url: "https://example.com" },
  { name: "Company B", logo: "/partners/companyB.png", url: "https://example.com" },
  { name: "Company C", logo: "/partners/companyC.png", url: "https://example.com" },
  { name: "Company D", logo: "/partners/companyD.png", url: "https://example.com" },
  { name: "Company E", logo: "/partners/companyE.png", url: "https://example.com" },
  { name: "Company F", logo: "/partners/companyF.png", url: "https://example.com" },
  { name: "Company G", logo: "/partners/companyG.png", url: "https://example.com" },
  { name: "Company H", logo: "/partners/companyH.png", url: "https://example.com" },
];

export default function Partners() {
  // ✅ Hydration 対策：クライアントマウント後のみ描画
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <Reveal>
        <h2 className="mb-8 text-center text-xs font-semibold tracking-[0.25em] text-neutral-500">
          CLUB PARTNERS
        </h2>
      </Reveal>

      <Reveal>
        <ul className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-4">
          {DUMMY_PARTNERS.map((p) => (
            <li key={p.name} className="flex justify-center">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center rounded-xl border border-neutral-200 bg-white/70 p-6 shadow-sm transition hover:shadow-md"
                aria-label={p.name}
                title={p.name}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-10 w-auto object-contain opacity-80 transition group-hover:opacity-100"
                />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <p className="mt-8 text-center text-sm text-neutral-500">
          現在クラブパートナーを募集しています。詳細は{" "}
          <a href="/contact" className="underline underline-offset-4 hover:text-neutral-700">
            Contact
          </a>
          からご連絡ください。
        </p>
      </Reveal>
    </section>
  );
}
