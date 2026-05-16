"use client";

import Image from "next/image";

type PageKey = "about" | "results" | "teams" | "join" | "contact" | "news";

type PageHeroConfig = {
  title: string;
  subtitle: string;
  image: string;
};

const PAGE_HERO_CONFIG: Record<PageKey, PageHeroConfig> = {
  about: {
    title: "ABOUT",
    subtitle: "クラブ紹介",
    image: "/hero-about.jpg",
  },
  results: {
    title: "RESULTS",
    subtitle: "過去の戦績",
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
  news: {
    title: "NEWS",
    subtitle: "お知らせ",
    image: "/hero-news.jpg",
  },
};

type Props = {
  page: PageKey;
};

export default function PageHero({ page }: Props) {
  const cfg = PAGE_HERO_CONFIG[page];

  return (
    <section className="relative h-[40vh] overflow-hidden md:h-[50vh]">
      <Image src={cfg.image} alt={cfg.title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl font-semibold uppercase tracking-[0.2em] md:text-4xl">
          {cfg.title}
        </h1>
        <p className="mt-3 text-sm tracking-wide md:text-base">{cfg.subtitle}</p>
      </div>
    </section>
  );
}
