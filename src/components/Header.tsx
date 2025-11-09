"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); // 初期判定
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        {/* ナビ */}
        <nav className="hidden sm:flex items-center gap-5 text-sm">
         <Link href="/" className="hover:opacity-70">HOME</Link>
         <Link href="/about" className="hover:opacity-70">ABOUT</Link>
         <Link href="/results" className="hover:opacity-70">RESULTS</Link>
         <Link href="/join" className="hover:opacity-70">JOIN</Link>
         <Link href="/contact" className="hover:opacity-70">CONTACT</Link>
         <a
         href="https://www.instagram.com/"
         target="_blank"
         className="rounded-md border px-3 py-1 transition-all duration-300"
         >
         Instagram
         </a>
        </nav>

      </div>
    </header>
  );
}
