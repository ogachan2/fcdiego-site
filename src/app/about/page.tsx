import Reveal from "@/components/Reveal";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      {/* 上部フル幅ヒーロー（共通コンポーネント） */}
      <PageHero page="about" />

      {/* ★ここを追加：Brew SAGA風のAboutヒーロー */}
      {/* <AboutIntroHero /> */}

      {/* 以下は従来どおりの中身 */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Hero Section（エンブレム＋紹介テキスト） */}
        <Reveal>
          <section className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex justify-center">
              <Image
                src="/emblem.PNG"
                alt="F.C. DIEGO emblem"
                width={200} // お好みで調整
                height={120}
                className="h-auto w-40 sm:w-48"
              />
            </div>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              F.C.DIEGO
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-neutral-700 sm:text-base sm:leading-8">
              九州大学を中心に活動するサッカーサークル。週末の公式戦・対外試合・日々の活動を通じて、
              「最高の4年間」を追求しています。
            </p>
          </section>
        </Reveal>

        {/* Flowing Banner Section */}
        {/* <Reveal>
          <section className="mt-10">
            <BannerStrip
              images={[
                "/about/about1.JPG",
                "/about/about2.JPG",
                "/about/about3.JPG",
                "/about/about4.JPG",
              ]}
              height={200}
              speedSec={25}
            />
          </section>
        </Reveal> */}

        {/* ===== Emotion Gallery ===== */}
        <section className="py-12 sm:py-16">
        <Reveal>
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            熱狂をともに。
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-neutral-600 sm:text-base">
            勝利の瞬間も、悔しさも、笑顔も。DIEGOの4年間は、すべてが本気だ。
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:gap-8">
            {[
              "/about/about5.JPEG",
              "/about/about6.JPEG",
            ].map((src) => (
              <div
                key={src}
                className="relative aspect-[3/2] overflow-hidden rounded-xl bg-neutral-100 shadow-sm ring-1 ring-black/5"
              >
                <Image
                  src={src}
                  alt="F.C.DIEGO moment"
                  fill
                  sizes="(min-width: 1024px) 544px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== Emotion Gallery : 仲間 ===== */}
      <section className="py-12 sm:py-16">
        <Reveal>
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            仲間とともに。
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-neutral-600 sm:text-base">
            うまくいく日も、うまくいかない日も。支え合える仲間がいるから続けられる。
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:gap-8">
            {[
              "/about/about7.JPEG",
              "/about/about8.JPEG",
            ].map((src) => (
              <div
                key={src}
                className="relative aspect-[3/2] overflow-hidden rounded-xl bg-neutral-100 shadow-sm ring-1 ring-black/5"
              >
                <Image
                  src={src}
                  alt="F.C.DIEGO friends"
                  fill
                  sizes="(min-width: 1024px) 544px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== Emotion Gallery : 青春 ===== */}
      <section className="py-12 sm:py-16">
        <Reveal>
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            青春をここで。
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-neutral-600 sm:text-base">
            日常の延長にある非日常。気づけば、かけがえのない時間になっている。
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:gap-8">
            {[
              "/about/about9.JPEG",
              "/about/about10.JPEG",
            ].map((src) => (
              <div
                key={src}
                className="relative aspect-[3/2] overflow-hidden rounded-xl bg-neutral-100 shadow-sm ring-1 ring-black/5"
              >
                <Image
                  src={src}
                  alt="F.C.DIEGO youth"
                  fill
                  sizes="(min-width: 1024px) 544px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

        {/* Mission / Vision / Value */}
        {/* <Reveal>
          <section>
            <h2 className="text-3xl font-bold mb-6">Mission / Vision / Value</h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                <strong>Mission：</strong> 個人の自由と組織の強さの両立
              </p>
              <p>
                <strong>Vision：</strong> 大学生活で最高の4年間を過ごす場所をつくる
              </p>
              <p>
                <strong>Values：</strong> 自主性・熱量・継続・敬意・継承・信頼
              </p>
            </div>
          </section>
        </Reveal> */}

        {/* Activity */}
        <Reveal>
          <section className="mx-auto max-w-3xl py-10 sm:py-12">
            <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
              Activity
            </h2>
            <ul className="space-y-3 text-sm leading-7 text-neutral-700 sm:text-base">
              <li>・練習：毎週土曜 9:00〜13:00</li>
              <li>・場所：福岡市内グラウンド</li>
              <li>・メンバー：約150名（九大生・他大学生・マネージャー）</li>
              <li>・特徴：競技と自由の両立／学生主体の運営体制</li>
            </ul>
          </section>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <section className="space-y-5 py-10 text-center sm:py-12">
            <p className="text-sm leading-7 text-neutral-700 sm:text-base">
              最新情報はInstagramからご覧ください。
            </p>
            <a
              href="https://www.instagram.com/diego_pics_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Instagramを見る
            </a>
          </section>
        </Reveal>
      </div>
    </>
  );
}
