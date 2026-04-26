import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { InstagramIcon, NoteIcon } from "@/components/SocialIcons";

const joinTypes = [
  {
    title: "Player",
    heading: "プレイヤー募集",
    image: "/hero-join.jpg",
    intro:
      "大学生・大学院生なら誰でも歓迎です。初心者も経験者も、サッカーを楽しみたい気持ちがあれば大丈夫。まずは一度、練習に参加して雰囲気を感じてみてください。",
    items: ["飲み物", "スパイク", "サッカーができる服装"],
    note: "練習場所や当日の詳細はInstagramで配信しています。",
  },
  {
    title: "Manager",
    heading: "マネージャー募集",
    image: "/about/about8.JPEG",
    intro:
      "F.C.DIEGOでは、マネージャーも大募集中です。チームを支える活動に興味がある人、写真やSNS、イベント運営に関わってみたい人も歓迎します。",
    items: ["試合・練習のサポート", "写真や動画の撮影", "SNS更新やチーム運営の補助"],
    note: "経験は問いません。大学から新しく挑戦したい人も大歓迎です。",
  },
] as const;

const socialLinks = [
  {
    href: "https://www.instagram.com/diego_pics_/",
    title: "Instagram",
    desc: "最新情報や試合結果を掲載しています。",
    icon: InstagramIcon,
  },
  {
    href: "https://note.com/fcdiego_1993",
    title: "note",
    desc: "部員の思いを綴ったブログを掲載しています。",
    icon: NoteIcon,
  },
] as const;

export default function JoinPage() {
  return (
    <>
      <PageHero page="join" />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <section className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
              Join F.C.DIEGO
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
              新メンバー募集
            </h1>
            <p className="mt-5 text-sm leading-7 text-neutral-700 sm:text-base sm:leading-8">
              F.C.DIEGOでは、プレイヤーとマネージャーを募集しています。初心者・経験者を問わず、大学生活でサッカーやチーム活動を楽しみたい人を歓迎します。
            </p>
          </section>
        </Reveal>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          {joinTypes.map((type, index) => (
            <Reveal key={type.title} delay={index * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={type.image}
                    alt={type.heading}
                    fill
                    sizes="(min-width: 1024px) 544px, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
                    {type.title}
                  </div>
                  <h2 className="absolute bottom-5 left-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {type.heading}
                  </h2>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-7 text-neutral-700 sm:text-base sm:leading-8">
                    {type.intro}
                  </p>

                  <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      {type.title === "Player" ? "持ち物" : "主な活動"}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-800">
                      {type.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-neutral-600">
                    {type.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </section>

        <Reveal>
          <section className="mt-12 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="grid gap-5 md:grid-cols-[260px_1fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                  Official Accounts
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-950">
                  SNS・ブログ
                </h2>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  練習場所や日程はInstagramで配信中。部員ブログもあわせてご覧ください。
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-neutral-950 hover:bg-white hover:shadow-md"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-950">
                        <Icon size={item.title === "Instagram" ? 20 : 34} />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-neutral-950">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm leading-6 text-neutral-600">
                          {item.desc}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        </Reveal>
      </main>
    </>
  );
}
