"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // PC ナビ用メニュー定義（英語＋日本語）
  const pcNavItems = [
    { href: "/", label: "HOME", sub: "ホーム" },
    { href: "/about", label: "ABOUT", sub: "クラブ紹介" },
    { href: "/results", label: "RESULTS", sub: "過去の成績" },
    { href: "/teams", label: "TEAMS", sub: "カテゴリ紹介" },
    { href: "/join", label: "JOIN", sub: "新歓情報" },
    { href: "/contact", label: "CONTACT", sub: "お問い合わせ" },
  ] as const;

  // スクロールでヘッダー縮小
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ページ遷移したら閉じる
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // メニュー開いている間はスクロールロック
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {/* ==== ヘッダー本体 ==== */}
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
          <nav className="hidden sm:flex items-center gap-6">
            {/* メインメニュー */}
            {pcNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center text-xs hover:opacity-80 transition-opacity"
              >
                <span className="text-[13px] font-medium tracking-wide">
                  {item.label}
                </span>
                <span className="mt-0.5 text-[10px] text-neutral-500 leading-none">
                  {item.sub}
                </span>
              </Link>
            ))}

            {/* SNS アイコン（Instagram / note） */}
            <div className="flex items-center gap-3 ml-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Instagram"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
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
              </a>

              {/* note */}
              <a
                href="https://note.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open note"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="4"
                    ry="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M9 7h6v6h-3.5L9 15.5V7z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </nav>

          {/* ハンバーガー（スマホ） */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
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
      </header>

      {/* ==== モバイルメニュー（右からスライドイン、後ろが少し見える） ==== */}
      <div
        id="mobile-menu"
        className={[
          "fixed inset-0 z-[9999] sm:hidden",
          "transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        {/* 背景オーバーレイ（サイトがうっすら見える） */}
        <button
          aria-label="Close menu backdrop"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/30"
        />

        {/* 右からスライドインする本体（白を少し透かす） */}
        <aside
          className={[
            "absolute right-0 top-0 h-full w-72 max-w-[80%]",
            "bg-white/90 backdrop-blur-md shadow-2xl",
            "flex flex-col",
            "transform transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          {/* 上のバー：エンブレム + タイトル + × */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <Image
                src="/emblem.PNG"
                alt="F.C. DIEGO emblem"
                width={28}
                height={28}
                className="object-contain rounded-full"
              />
              <span className="text-sm font-semibold tracking-wide">
                F.C. DIEGO
              </span>
            </div>
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

          {/* メニュー項目（左寄せ・時差フェードイン） */}
          <nav className="flex-1 overflow-y-auto px-4 py-4">
            <ul className="space-y-1 text-base">
              {/* 1 */}
              <li
                className={[
                  "transition-all duration-400 ease-out",
                  open
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2",
                ].join(" ")}
                style={{ transitionDelay: open ? "0.06s" : "0s" }}
              >
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 rounded-md hover:bg-neutral-50"
                >
                  HOME
                </Link>
              </li>
              {/* 2 */}
              <li
                className={[
                  "transition-all duration-400 ease-out",
                  open
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2",
                ].join(" ")}
                style={{ transitionDelay: open ? "0.12s" : "0s" }}
              >
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 rounded-md hover:bg-neutral-50"
                >
                  ABOUT
                </Link>
              </li>
              {/* 3 */}
              <li
                className={[
                  "transition-all duration-400 ease-out",
                  open
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2",
                ].join(" ")}
                style={{ transitionDelay: open ? "0.18s" : "0s" }}
              >
                <Link
                  href="/results"
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 rounded-md hover:bg-neutral-50"
                >
                  RESULTS
                </Link>
              </li>
              {/* 4 */}
              <li
                className={[
                  "transition-all duration-400 ease-out",
                  open
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2",
                ].join(" ")}
                style={{ transitionDelay: open ? "0.24s" : "0s" }}
              >
                <Link
                  href="/teams"
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 rounded-md hover:bg-neutral-50"
                >
                  TEAMS
                </Link>
              </li>
              {/* 5 */}
              <li
                className={[
                  "transition-all duration-400 ease-out",
                  open
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2",
                ].join(" ")}
                style={{ transitionDelay: open ? "0.30s" : "0s" }}
              >
                <Link
                  href="/join"
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 rounded-md hover:bg-neutral-50"
                >
                  JOIN
                </Link>
              </li>
              {/* 6 */}
              <li
                className={[
                  "transition-all duration-400 ease-out",
                  open
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2",
                ].join(" ")}
                style={{ transitionDelay: open ? "0.36s" : "0s" }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 rounded-md hover:bg-neutral-50"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          {/* 下部：SNSアイコン（Instagram / note） */}
          <div
            className={[
              "border-t border-neutral-200 px-4 py-3",
              "flex items-center justify-between",
              "transition-all duration-400 ease-out",
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-1",
            ].join(" ")}
            style={{ transitionDelay: open ? "0.42s" : "0s" }}
          >
            <span className="text-xs text-neutral-500">Official Accounts</span>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                aria-label="Open Instagram"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
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
              </a>

              {/* note */}
              <a
                href="https://note.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                aria-label="Open note"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="4"
                    ry="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M9 7h6v6h-3.5L9 15.5V7z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
