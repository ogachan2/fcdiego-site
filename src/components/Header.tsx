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
            className="group inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-neutral-200 bg-white/80 shadow-sm transition hover:border-neutral-950 hover:bg-neutral-950 sm:hidden"
          >
            <span className="h-0.5 w-5 rounded-full bg-neutral-950 transition group-hover:bg-white" />
            <span className="h-0.5 w-4 rounded-full bg-neutral-950 transition group-hover:w-5 group-hover:bg-white" />
            <span className="h-0.5 w-5 rounded-full bg-neutral-950 transition group-hover:bg-white" />
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
          className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
        />

        <aside
          className={[
            "absolute right-0 top-0 flex h-full w-80 max-w-[86%] flex-col overflow-hidden",
            "border-l border-white/40 bg-white/92 shadow-2xl backdrop-blur-xl",
            "transform transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="relative border-b border-neutral-200 px-5 py-5">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neutral-950 via-neutral-500 to-neutral-200" />
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/emblem.PNG"
                alt="F.C. DIEGO emblem"
                width={28}
                height={28}
                className="rounded-full object-contain"
              />
              <div>
                <span className="block text-sm font-bold tracking-wide">
                  F.C.DIEGO
                </span>
                <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
                  Menu
                </span>
              </div>
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
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
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-5">
            <ul className="space-y-2 text-base">
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
                    className={[
                      "group relative block overflow-hidden rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 shadow-sm transition duration-300",
                      "hover:-translate-y-0.5 hover:border-neutral-950 hover:shadow-md",
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href))
                        ? "border-neutral-950 bg-neutral-950 text-white"
                        : "text-neutral-950",
                    ].join(" ")}
                  >
                    <span className="relative z-10 flex items-center justify-between gap-4">
                      <span>
                        <span className="block text-sm font-bold tracking-wide">
                          {item.label}
                        </span>
                        <span
                          className={[
                            "mt-1 block text-[11px] leading-none",
                            pathname === item.href ||
                            (item.href !== "/" && pathname.startsWith(item.href))
                              ? "text-white/65"
                              : "text-neutral-500",
                          ].join(" ")}
                        >
                          {item.sub}
                        </span>
                      </span>
                      <span
                        className={[
                          "flex h-7 w-7 items-center justify-center rounded-full border text-xs transition duration-300 group-hover:translate-x-0.5",
                          pathname === item.href ||
                          (item.href !== "/" && pathname.startsWith(item.href))
                            ? "border-white/25 bg-white/10 text-white"
                            : "border-neutral-200 bg-neutral-50 text-neutral-500 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white",
                        ].join(" ")}
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={[
              "flex items-center justify-between border-t border-neutral-200 bg-neutral-50/80 px-5 py-4",
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white transition hover:-translate-y-0.5 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white transition hover:-translate-y-0.5 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
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
