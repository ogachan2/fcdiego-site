// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "F.C. DIEGO — Kyushu Univ. Football Circle",
  description:
    "九州大学のサッカーサークル F.C. DIEGO 公式サイト。活動紹介・戦績・新歓情報など。",
};

const nav = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/results", label: "RESULTS" },
  { href: "/join", label: "JOIN" },
  { href: "/contact", label: "CONTACT" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-white text-neutral-900 antialiased">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
            <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
              <Link href="/" className="font-semibold tracking-wide">F.C. DIEGO</Link>
              <nav className="hidden sm:flex gap-6 text-sm">
                {nav.map((n) => (
                  <Link key={n.href} href={n.href} className="hover:opacity-70">
                    {n.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          {/* Page */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t">
            <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <p>© {new Date().getFullYear()} F.C. DIEGO</p>
              <div className="flex items-center gap-4">
                <Link className="underline hover:opacity-70" href="/contact">お問い合わせ</Link>
                <a
                  className="underline hover:opacity-70"
                  href="https://www.instagram.com/" // ← 公式URLに差し替え
                  target="_blank"
                >
                  Instagram
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
