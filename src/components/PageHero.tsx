// src/components/PageHero.tsx
"use client";

import Image from "next/image";

type PageKey = "about" | "results" | "teams" | "join" | "contact";

type PageHeroConfig = {
  title: string;      // 英語タイトル（大きく表示）
  subtitle: string;   // 日本語サブタイトル（小さく表示）
  image: string;      // public 配下のパス
};

const PAGE_HERO_CONFIG: Record<PageKey, PageHeroConfig> = {
  about: {
    title: "ABOUT",
    subtitle: "クラブ紹介",
    image: "/hero-about.jpg",
  },
  results: {
    title: "RESULTS",
    subtitle: "過去の成績",
    image: "/hero-results.jpg",
  },
  teams: {
    title: "TEAMS",
    subtitle: "カテゴリ紹介",
    image: "/hero-teams.jpg",
  },
  join: {
    title: "JOIN",
    subtitle: "新歓情報",
    image: "/hero-join.jpg",
  },
  contact: {
    title: "CONTACT",
    subtitle: "お問い合わせ",
    image: "/hero-contact.jpg",
  },
};

type Props = {
  page: PageKey;
};

export default function PageHero({ page }: Props) {
  const cfg = PAGE_HERO_CONFIG[page];

  return (
    <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
      {/* 背景画像 */}
      <Image
        src={cfg.image}
        alt={cfg.title}
        fill
        priority
        className="object-cover"
      />
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/45" />

      {/* 中央テキスト */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-[0.2em] uppercase">
          {cfg.title}
        </h1>
        <p className="mt-3 text-sm md:text-base tracking-wide">
          {cfg.subtitle}
        </p>
      </div>
    </section>
  );
}
