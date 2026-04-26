// src/app/teams/page.tsx
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";

const teams = [
  {
    title: "F.C.ELAN",
    desc: "年度末に行われる選手内投票によって選ばれた、F.C.DIEGOのトップチーム。福岡地区社会人サッカーリーグ１部所属。アットホームチャンピオンシップでは毎年全国大会出場し、同好会日本一を目指しています。",
    image: "/teams/elan/hero.jpg",
  },
  {
    title: "F.C.DIEGO",
    desc: "F.C.DIEGOの主力チーム。九州大学の学生たちが中心となって構成され、地域社会人サッカーリーグに参加しています。",
    image: "/teams/diego/hero.jpg",
  },
  {
    title: "ONE HEART",
    desc: "F.C.DIEGOのサポートチーム。九州大学の学生たちが中心となって構成され、地域社会人サッカーリーグに参加しています。",
    image: "/hero-teams.jpg",
  },
  {
    title: "F.C.DIEGO MASTERS",
    desc: "F.C.DIEGOの高水準チーム。九州大学の学生たちが中心となって構成され、地域社会人サッカーリーグに参加しています。",
    image: "/teams/masters/hero.jpg",
  },
];

export default function TeamsIndexPage() {
  return (
    <>
      <PageHero page="teams" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Teams
            </h1>
          </div>
        </Reveal>

        <div className="space-y-12">
          {teams.map((team) => (
            <Reveal key={team.title}>
              <section className="grid items-center gap-6 border-b border-neutral-200 pb-12 last:border-b-0 last:pb-0 md:grid-cols-[1fr_420px] md:gap-10">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                    {team.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-700 sm:text-base sm:leading-8">
                    {team.desc}
                  </p>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 shadow-sm ring-1 ring-black/5">
                  <Image
                    src={team.image}
                    alt={`${team.title} photo`}
                    fill
                    sizes="(min-width: 1024px) 420px, (min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
