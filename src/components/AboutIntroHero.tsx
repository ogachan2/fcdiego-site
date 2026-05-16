"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Slide = { src: string; alt: string };

export default function AboutIntroHero() {
  const slides: Slide[] = useMemo(
    () => [
      { src: "/about/about1.JPG", alt: "DIEGO about slide 1" },
      { src: "/about/about2.JPG", alt: "DIEGO about slide 2" },
      { src: "/about/about3.JPG", alt: "DIEGO about slide 3" },
      { src: "/about/about4.JPG", alt: "DIEGO about slide 4" },
    ],
    []
  );

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  // どのスライドが中央にいるかをざっくり検知
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;

      let bestIdx = 0;
      let bestDist = Infinity;

      children.forEach((c, i) => {
        const cCenter = c.offsetLeft + c.clientWidth / 2;
        const d = Math.abs(center - cCenter);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      });

      setActive(bestIdx);
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const go = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      {/* 背景（斜めストライプ + うっすいグラデ） */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 to-neutral-800" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.22) 0px, rgba(255,255,255,0.22) 10px, rgba(255,255,255,0) 10px, rgba(255,255,255,0) 26px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* 左：コピー */}
          <div className="lg:col-span-5 text-white">
            <p className="text-xs tracking-[0.3em] text-white/70 uppercase">
              Club Information
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
              サッカーで、人生を熱くする。
              <br />
              仲間とともに、青春を積み上げる。
            </h1>
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-white/80">
              九州大学を中心に活動するサッカーサークル。
              週末の公式戦・対外試合・日々の活動を通じて、「最高の4年間」を追求しています。
            </p>

            {/* ドット */}
            <div className="mt-8 flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    active === i ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/65"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 右：スライダー（scroll-snap） */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* 外枠カード */}
              <div className="rounded-3xl ring-1 ring-white/10 bg-white/5 p-3 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div
                  ref={scrollerRef}
                  className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 no-scrollbar"
                >
                  {slides.map((s) => (
                    <div
                      key={s.src}
                      className="relative min-w-full snap-center aspect-[16/9] overflow-hidden rounded-2xl"
                    >
                      <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        className="object-cover"
                        priority={active === 0}
                      />
                      {/* うっすい下グラデで締める */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* 右下の「スワイプしてね」的な小ラベル（任意） */}
              <div className="mt-3 text-right text-xs text-white/65">
                Swipe to explore
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}