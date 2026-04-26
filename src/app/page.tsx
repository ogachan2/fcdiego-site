import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroSlider from "@/components/HeroSlider";

const pageLinks = [
  {
    href: "/about",
    title: "About us",
    label: "Club",
    image: "/top/top1.JPEG",
    alt: "F.C.DIEGO about",
    desc: "F.C.DIEGO は九州大学のサッカーサークルです。毎週土曜日に、福岡市内のグラウンドで活動しています。 サッカーが好きな学生が集まり、試合や練習、イベントを通して「最高の4年間」を一緒に過ごしています。",
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
    image: "/hero-results.jpg",
    alt: "F.C.DIEGO results",
    desc: "同好会選手権 九州大会準優勝（2024）／全国大会ベスト16・総合11位などの実績。過去には2年連続で全国大会準優勝。",
    cta: "Resultsページへ",
  },
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ===== Hero ===== */}
      <HeroSlider />

      {/* ===== Brand Message Band (Black Ver.) ===== */}
      <section className="border-y border-black bg-black">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <p className="text-center text-xs font-medium tracking-wide text-white sm:text-sm">
            F.C.DIEGO・Kyushu University Football Circle Since 1993
          </p>
        </div>
      </section>

      {/* ===== Page Links ===== */}
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

      {/* ===== CTA ===== */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              一緒に、次のシーズンをつくろう。
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-neutral-700">
              初心者から経験者まで歓迎。まずは新歓ページをご覧ください。
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6">
              <Link
                href="/join"
                className="inline-flex items-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                JOIN US
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
