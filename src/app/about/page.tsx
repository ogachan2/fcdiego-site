import Reveal from "@/components/Reveal";
import BannerStrip from "@/components/BannerStrip";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      {/* 上部フル幅ヒーロー（共通コンポーネント） */}
      <PageHero page="about" />

      {/* 以下は従来どおりの中身 */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Hero Section（エンブレム＋紹介テキスト） */}
        <Reveal>
          <section className="text-center">
            <div className="flex justify-center mb-0">
              <Image
                src="/emblem.PNG"
                alt="F.C. DIEGO emblem"
                width={200} // お好みで調整
                height={120}
                className="rounded-none"
              />
            </div>
            <h1 className="text-4xl font-extrabold mb-4">F.C.DIEGO</h1>
            <p className="text-neutral-700 leading-relaxed max-w-2xl mx-auto">
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
      <section className="max-w-6xl mx-auto px-4 py-20">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            熱狂をともに。
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-center text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto">
            勝利の瞬間も、悔しさも、笑顔も。DIEGOの4年間は、すべてが本気だ。
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "/about/about5.JPEG",
              "/about/about6.JPEG",
            ].map((src) => (
              <div
                key={src}
                className="relative aspect-[3/2] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt="F.C.DIEGO moment"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== Emotion Gallery : 仲間 ===== */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            仲間とともに。
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-center text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto">
            うまくいく日も、うまくいかない日も。支え合える仲間がいるから続けられる。
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "/about/about7.JPEG",
              "/about/about8.JPEG",
            ].map((src) => (
              <div
                key={src}
                className="relative aspect-[3/2] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt="F.C.DIEGO friends"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== Emotion Gallery : 青春 ===== */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            青春をここで。
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-center text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto">
            日常の延長にある非日常。気づけば、かけがえのない時間になっている。
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "/about/about9.JPEG",
              "/about/about10.JPEG",
            ].map((src) => (
              <div
                key={src}
                className="relative aspect-[3/2] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt="F.C.DIEGO youth"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
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
          <section>
            <h2 className="text-3xl font-bold mb-6">Activity</h2>
            <ul className="text-neutral-700 space-y-2">
              <li>・練習：毎週土曜 9:00〜13:00</li>
              <li>・場所：福岡市内グラウンド</li>
              <li>・メンバー：約150名（九大生・他大学生・マネージャー）</li>
              <li>・特徴：競技と自由の両立／学生主体の運営体制</li>
            </ul>
          </section>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <section className="text-center space-y-4">
            <p className="text-neutral-700">
              最新情報はInstagramからご覧ください。
            </p>
            <a
              href="https://www.instagram.com/diego_pics_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition"
            >
              Instagramを見る
            </a>
          </section>
        </Reveal>
      </div>
    </>
  );
}
