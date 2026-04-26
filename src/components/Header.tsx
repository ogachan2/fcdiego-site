"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "HOME", sub: "ホーム" },
  { href: "/about", label: "ABOUT", sub: "クラブ紹介" },
  { href: "/teams", label: "TEAMS", sub: "カテゴリ紹介" },
  { href: "/results", label: "RESULTS", sub: "過去の戦績" },
  { href: "/join", label: "JOIN", sub: "新歓情報" },
  { href: "/contact", label: "CONTACT", sub: "お問い合わせ" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
      <header
        className={[
          "sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur transition-all duration-300",
          scrolled ? "shadow-sm" : "shadow-none",
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300",
            scrolled ? "h-14" : "h-20",
          ].join(" ")}
        >
          <Link
            href="/"
            className={[
              "group flex items-center gap-2 font-extrabold tracking-tight transition-all duration-300",
              scrolled ? "text-lg" : "text-2xl",
            ].join(" ")}
          >
            <Image
              src="/emblem.PNG"
              alt="F.C. DIEGO emblem"
              width={40}
              height={40}
              className="object-contain transition duration-300 group-hover:scale-105"
            />
            <span>F.C. DIEGO</span>
          </Link>

          <nav className="relative hidden items-center rounded-full border border-neutral-200 bg-white/75 px-2 py-1.5 shadow-sm ring-1 ring-white/70 backdrop-blur sm:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "group relative flex min-w-20 flex-col items-center justify-center overflow-hidden rounded-full px-3 py-2 text-xs",
                    "transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950",
                    active ? "text-neutral-950" : "text-neutral-600",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "absolute inset-0 rounded-full bg-neutral-950 transition duration-300",
                      active
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100",
                    ].join(" ")}
                  />
                  <span className="absolute inset-x-3 top-1 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <span
                    className={[
                      "relative z-10 text-[13px] font-semibold tracking-wide transition duration-300",
                      active ? "text-white" : "group-hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                  <span
                    className={[
                      "relative z-10 mt-0.5 text-[10px] leading-none transition duration-300",
                      active
                        ? "text-white/70"
                        : "text-neutral-500 group-hover:text-white/70",
                    ].join(" ")}
                  >
                    {item.sub}
                  </span>
                </Link>
              );
            })}

            <div className="ml-3 flex items-center gap-2 border-l border-neutral-200 pl-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Instagram"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 transition duration-300 hover:-translate-y-0.5 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
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

              <a
                href="https://note.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open note"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 transition duration-300 hover:-translate-y-0.5 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
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

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 transition hover:bg-neutral-100 sm:hidden"
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

      <div
        id="mobile-menu"
        className={[
          "fixed inset-0 z-[9999] sm:hidden",
          "transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <button
          aria-label="Close menu backdrop"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/30"
        />

        <aside
          className={[
            "absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col",
            "bg-white/90 shadow-2xl backdrop-blur-md",
            "transform transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
            <div className="flex items-center gap-2">
              <Image
                src="/emblem.PNG"
                alt="F.C. DIEGO emblem"
                width={28}
                height={28}
                className="rounded-full object-contain"
              />
              <span className="text-sm font-semibold tracking-wide">
                F.C.DIEGO
              </span>
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-md p-2 transition hover:bg-neutral-100"
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

          <nav className="flex-1 overflow-y-auto px-4 py-4">
            <ul className="space-y-1 text-base">
              {navItems.map((item, index) => (
                <li
                  key={item.href}
                  className={[
                    "transition-all duration-400 ease-out",
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-2 opacity-0",
                  ].join(" ")}
                  style={{
                    transitionDelay: open ? `${0.06 * (index + 1)}s` : "0s",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-3 transition hover:bg-neutral-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={[
              "flex items-center justify-between border-t border-neutral-200 px-4 py-3",
              "transition-all duration-400 ease-out",
              open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: open ? "0.42s" : "0s" }}
          >
            <span className="text-xs text-neutral-500">Official Accounts</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                aria-label="Open Instagram"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
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

              <a
                href="https://note.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                aria-label="Open note"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
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
