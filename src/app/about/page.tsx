import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { InstagramIcon, NoteIcon } from "@/components/SocialIcons";

const activityItems = [
  { label: "練習日", value: "毎週土曜日 / 9:00-13:00" },
  { label: "試合日", value: "日曜日 / 不定期開催" },
  { label: "主な会場", value: "今津運動公園 / 西南の杜湖畔公園 / 九州大学多目的グラウンド ほか" },
  { label: "所属人数", value: "約150人" },
  { label: "所属大学", value: "九州大学を中心に、福岡大学 / 西南大学 / その他大学" },
  { label: "活動内容", value: "練習 / 対外試合 / 公式戦 / イベント" },
  { label: "モットー", value: "楽しく、強く" },
] as const;

const messageBlocks = [
  {
    title: "本気で楽しむ",
    subtitle: "経験やレベルに関係なく、それぞれの熱量でサッカーと向き合える場所です。",
    images: ["/about/about5.JPEG", "/about/about6.JPEG", "/about/about7.JPEG"],
  },
  {
    title: "仲間と過ごす",
    subtitle: "試合の日も、練習の日も、何気ない時間も。大学生活の中心に残るつながりがあります。",
    images: ["/about/about8.JPEG", "/about/about9.JPEG", "/about/about10.JPEG"],
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

export default function AboutPage() {
  return (
    <>
      <PageHero page="about" />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <section className="grid items-center gap-8 border-b border-neutral-200 pb-12 sm:pb-14 md:grid-cols-[1fr_280px] md:gap-12">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-neutral-950" />
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                  Club Profile
                </span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
                F.C.DIEGO
              </h1>

              <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-700 sm:text-base sm:leading-8">
                <p>
                  F.C.DIEGOは、九州大学を中心に活動するサッカーサークルです。週末の練習や対外試合、公式戦を通して、サッカーに本気で向き合いながら、大学生活でしか味わえない時間を仲間とつくっています。
                </p>
                <p>
                  メンバーには、Jユース出身やナショナルトレセン経験者から、大学で初めてサッカーを始める人まで、幅広いレベルのプレイヤーが在籍しています。マネージャーも同様に、さまざまな背景を持つメンバーが活躍しています。
                </p>
                <p>
                  本気で勝ちにいきたい人、気軽にサッカーを楽しみたい人、仲間と青春を満喫したい人。それぞれのスタイルを尊重しながら、同じピッチでひとつのチームとして過ごせることがDIEGOの魅力です。
                </p>
                <p className="font-semibold text-neutral-950">
                  すべてのメンバーに共通しているのは、サッカーが好きという想い。異なるバックグラウンドを持つ仲間が集まり、一緒にプレーすることで生まれる一体感こそが、F.C.DIEGOらしさです。
                </p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-56 self-center md:max-w-none">
              <Image
                src="/emblem.PNG"
                alt="F.C. DIEGO emblem"
                width={280}
                height={280}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="border-b border-neutral-200 py-12 sm:py-14">
            <div className="grid gap-8 md:grid-cols-[260px_1fr] md:gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                  Activity
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                  活動について
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  日々の活動内容を、初めて見る人にも分かりやすい形でまとめています。
                </p>
              </div>

              <dl className="divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white">
                {activityItems.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-2 px-4 py-4 sm:grid-cols-[120px_1fr] sm:gap-6 sm:px-5"
                  >
                    <dt className="text-sm font-semibold text-neutral-950">
                      {item.label}
                    </dt>
                    <dd className="text-sm leading-6 text-neutral-700">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </Reveal>

        <section className="py-12 sm:py-14">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                Message
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                DIEGOで過ごす時間
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
                部活でも、他のサークルでも味わえない、ディエゴにしかない特別な青春を、一緒に楽しみませんか？
              </p>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {messageBlocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.1}>
                <article className="group h-full rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-xl bg-neutral-100">
                      <Image
                        src={block.images[0]}
                        alt={block.title}
                        fill
                        sizes="(min-width: 1024px) 520px, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    {block.images.slice(1).map((src) => (
                      <div
                        key={src}
                        className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100"
                      >
                        <Image
                          src={src}
                          alt={block.title}
                          fill
                          sizes="(min-width: 1024px) 250px, 50vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="pt-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="h-px w-10 bg-neutral-950 transition-all duration-300 group-hover:w-16" />
                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-700">
                      {block.subtitle}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="grid gap-5 md:grid-cols-[260px_1fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                  Official Accounts
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-950">
                  SNS・ブログ
                </h2>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  最新情報や部員ブログもあわせてご覧ください。
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
