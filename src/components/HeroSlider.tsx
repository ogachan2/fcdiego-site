// src/components/HeroSlider.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// 切り替えたい画像をここに並べる（/public 配下）
const HERO_IMAGES = [
  { src: "/hero1.jpg", alt: "F.C. DIEGO 1" },
  { src: "/hero2.jpg", alt: "F.C. DIEGO 2" },
  { src: "/hero3.jpg", alt: "F.C. DIEGO 3" },
  { src: "/hero4.jpg", alt: "F.C. DIEGO 4" },
];

const INTERVAL_MS = 5000; // 5秒ごとに切り替え

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // 5秒ごとにインデックスを更新
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[65vh] sm:h-[85vh] overflow-hidden">
      {/* 背景スライド（フェードで切り替え） */}
      {HERO_IMAGES.map((img, i) => (
        <div
          key={img.src}
          className={[
            "absolute inset-0 transition-opacity duration-700",
            i === index ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0} // 最初の1枚だけ優先読み込み
            className="object-cover"
          />
        </div>
      ))}
    </section>
  );
}
