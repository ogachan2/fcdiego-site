import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import { InstagramIcon, NoteIcon } from "@/components/SocialIcons";

const pageLinks = [
  {
    href: "/about",
    title: "About us",
    label: "Club",
    image: "/top/top1.JPEG",
    alt: "F.C.DIEGO about",
    desc: "F.C.DIEGOは九州大学を中心に活動するサッカーサークルです。練習や試合、イベントを通して、仲間と大学生活を楽しんでいます。",
    cta: "F.C.DIEGOについて知る",
  },
  {
    href: "/teams",
    title: "Teams",
    label: "Category",
    image: "/top/top2.JPEG",
    alt: "F.C.DIEGO teams",
    desc: "目的やレベルに合わせて選べる、4つのカテゴリで活動しています。",
    cta: "カテゴリ紹介へ",
  },
  {
    href: "/results",
    title: "Highlights",
    label: "Results",
    image: "/top/top3.JPEG",
    alt: "F.C.DIEGO results",
    desc: "同好会選手権 九州大会準優勝、全国大会出場など、これまでの実績を紹介しています。",
    cta: "Resultsページへ",
  },
] as const;

const socialLinks = [
  {
    href: "https://www.instagram.com/diego_pics_/",
    title: "Instagram",
    label: "Latest",
    desc: "最新情報や試合結果を掲載しています。",
    cta: "Instagramを見る",
  },
  {
    href: "https://note.com/fcdiego_1993",
    title: "note",
    label: "Story",
    desc: "部員の思いを綴ったブログを掲載しています。",
    cta: "noteを読む",
  },
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSlider />

      <section className="border-y border-black bg-black">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <p className="text-center text-xs font-medium tracking-wide text-white sm:text-sm">
            F.C.DIEGO・Kyushu University Football Circle Since 1993
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Explore F.C.DIEGO
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {pageLinks.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.08}>
              <Link
                href={item.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 352px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition duration-300 group-hover:from-black/45" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
                    {item.label}
                  </div>
                  <div className="absolute bottom-5 left-5 h-10 w-10 border-l-2 border-t-2 border-white/80 transition duration-300 group-hover:h-14 group-hover:w-14" />
                  <div className="absolute right-5 top-5 h-10 w-10 border-r-2 border-t-2 border-white/80 transition duration-300 group-hover:h-14 group-hover:w-14" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-10 bg-neutral-950 transition-all duration-300 group-hover:w-16" />
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-950 transition duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-neutral-700">
                    {item.desc}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-neutral-950">
                    <span>{item.cta}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 transition duration-300 group-hover:translate-x-1 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <Reveal>
          <div className="grid gap-5 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm md:grid-cols-[260px_1fr] md:items-center md:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                Official Accounts
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                SNS・ブログ
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                最新情報はInstagram、部員ブログはnoteからご覧ください。
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {socialLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-neutral-950 hover:bg-white hover:shadow-md"
                >
                  <div className="pointer-events-none absolute -right-5 -top-5 text-neutral-950/[0.04] transition duration-300 group-hover:text-neutral-950/[0.07]">
                    {item.title === "Instagram" ? (
                      <InstagramIcon size={128} />
                    ) : (
                      <NoteIcon size={180} />
                    )}
                  </div>

                  <div className="relative z-10 mb-4 flex items-center justify-between gap-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
                      {item.label}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-sm text-neutral-600 transition group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                      →
                    </span>
                  </div>
                  <h3 className="relative z-10 text-xl font-bold tracking-tight text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm leading-6 text-neutral-600">
                    {item.desc}
                  </p>
                  <p className="relative z-10 mt-5 text-sm font-semibold text-neutral-950">
                    {item.cta}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neutral-950 via-neutral-500 to-neutral-200" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                Join us
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                新メンバー募集
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
                プレイヤーもマネージャーも募集しています。初心者・経験者を問わず、F.C.DIEGOの雰囲気を知りたい方は募集情報をご覧ください。
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <Link
                href="/join"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
              >
                募集情報を見る
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
