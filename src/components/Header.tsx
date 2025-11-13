"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";   // # 追加: ルート変化でメニューを閉じる

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();                // # 追加

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {                               // # 追加: ルート変化でドロワーを閉じる
    setOpen(false);
  }, [pathname]);

  useEffect(() => {                               // # 追加: メニュー開時は背景スクロール固定
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        "backdrop-blur bg-white/80",
        scrolled ? "shadow-sm" : "shadow-none",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto max-w-6xl flex items-center justify-between px-4",
          "transition-all duration-300",
          scrolled ? "h-14" : "h-20",
        ].join(" ")}
      >
        {/* ロゴ */}
        <Link
          href="/"
          className={[
            "flex items-center space-x-2 font-extrabold tracking-tight transition-all duration-300",
            scrolled ? "text-lg" : "text-2xl",
          ].join(" ")}
        >
          <Image
            src="/emblem.PNG"
            alt="F.C. DIEGO emblem"
            width={40}
            height={40}
            className="object-contain"
          />
          <span>F.C. DIEGO</span>
        </Link>

        {/* ナビ（PC/タブレット） */}
        <nav className="hidden sm:flex items-center gap-5 text-sm">
          <Link href="/" className="hover:opacity-70">
            HOME
          </Link>
          <Link href="/about" className="hover:opacity-70">
            ABOUT
          </Link>
          <Link href="/results" className="hover:opacity-70">
            RESULTS
          </Link>
          <Link href="/teams" className="hover:opacity-70">
            TEAMS
          </Link>
          <Link href="/join" className="hover:opacity-70">
            JOIN
          </Link>
          <Link href="/contact" className="hover:opacity-70">
            CONTACT
          </Link>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-3 py-1 transition-all duration-300"
          >
            Instagram
          </a>
        </nav>

        {/* ハンバーガー（スマホのみ表示） */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open} // # ARIA
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      </div>

      {/* ===== モバイルメニュー（全画面ホワイト） ===== */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-white sm:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* 上部バー */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
            <span className="font-semibold">Menu</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-md p-2 hover:bg-neutral-100"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </button>
          </div>

          {/* メニュー本体 */}
          <nav className="px-2 py-2">
            <ul className="divide-y divide-neutral-200">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:bg-neutral-50"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:bg-neutral-50"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/results"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:bg-neutral-50"
                >
                  RESULTS
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:bg-neutral-50"
                >
                  TEAMS
                </Link>
              </li>
              <li>
                <Link
                  href="/join"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:bg-neutral-50"
                >
                  JOIN
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:bg-neutral-50"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:bg-neutral-50"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
