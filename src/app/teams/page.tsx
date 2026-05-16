// src/app/teams/page.tsx
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";

const teams = [
  {
    title: "F.C.ELAN",
    desc: "年度末に行われる選手内投票によって選ばれたメンバーで構成される選抜チーム。アットホームチャンピオンシップでは毎年全国大会出場し、同好会日本一を目指しています。",
    league: "福岡地区社会人サッカーリーグ1部",
    image: "/teams/elan/hero.jpg",
  },
  {
    title: "F.C.DIEGO",
    desc: "1年生から所属できるチーム。熱量高く日々の活動に取り組んでいます。ELAN候補メンバーも多く所属しています。",
    league: "福岡地区社会人サッカーリーグ3部",
    image: "/teams/diego/hero.jpg",
  },
  {
    title: "ONE HEART",
    desc: "1年生から所属できるチーム。サッカーを楽しみたい人が多く、和気あいあいと活動しています。初心者も大歓迎です。",
    league: "福岡地区社会人サッカーリーグ4部",
    image: "/teams/oneheart/hero.jpg",
  },
  {
    title: "F.C.DIEGO MASTERS",
    desc: "大学院生と社会人によって構成されるチーム。研究や仕事と両立しながら楽しく活動しています。",
    league: "福岡地区社会人サッカーリーグ1部",
    image: "/teams/masters/hero.jpg",
  },
];

export default function TeamsIndexPage() {
  return (
    <>
      <PageHero page="teams" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center sm:mb-16">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Teams
            </h1>
          </div>
        </Reveal>

        <div className="space-y-8 sm:space-y-10">
          {teams.map((team, index) => (
            <Reveal key={team.title}>
              <section className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl sm:p-7 md:grid md:grid-cols-[1fr_420px] md:items-center md:gap-10">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neutral-950 via-neutral-500 to-neutral-200" />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-10 bg-neutral-950 transition-all duration-300 group-hover:w-16" />
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                      Category {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-neutral-950 transition duration-300 group-hover:translate-x-1 sm:text-3xl">
                    {team.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-700 sm:text-base sm:leading-8">
                    {team.league}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-700">
                    {team.desc}
                  </p>
                </div>

                <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 shadow-sm ring-1 ring-black/5 md:mt-0">
                  <Image
                    src={team.image}
                    alt={`${team.title} photo`}
                    fill
                    sizes="(min-width: 1024px) 420px, (min-width: 768px) 40vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-white/10 opacity-70 transition duration-300 group-hover:opacity-40" />
                  <div className="absolute bottom-4 left-4 h-10 w-10 border-l-2 border-t-2 border-white/80 transition duration-300 group-hover:h-14 group-hover:w-14" />
                  <div className="absolute right-4 top-4 h-10 w-10 border-r-2 border-t-2 border-white/80 transition duration-300 group-hover:h-14 group-hover:w-14" />
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
