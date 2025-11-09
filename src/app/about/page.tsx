import Reveal from "@/components/Reveal";
import BannerStrip from "@/components/BannerStrip";
import Image from "next/image";


export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <Reveal>
        <section className="text-center">
          <div className="flex justify-center mb-0">
           <Image
            src="/emblem.PNG"
            alt="F.C. DIEGO emblem"
            width={200}   // お好みで調整
            height={120}
            className="rounded-none"
            />
         </div>
          <h1 className="text-4xl font-extrabold mb-4">F.C. DIEGO</h1>
          <p className="text-neutral-700 leading-relaxed max-w-2xl mx-auto">
            九州大学を中心に活動するサッカーサークル。週末の公式戦・対外試合・日々の活動を通じて、
            「最高の4年間」を追求しています。
          </p>
        </section>
      </Reveal>

{/* Flowing Banner Section */}
<Reveal>
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
</Reveal>


      {/* Mission / Vision / Value */}
      <Reveal>
        <section>
          <h2 className="text-3xl font-bold mb-6">Mission / Vision / Value</h2>
          <div className="space-y-4 text-neutral-700">
            <p><strong>Mission：</strong> 個人の自由と組織の強さの両立</p>
            <p><strong>Vision：</strong> 大学生活で最高の4年間を過ごす場所をつくる</p>
            <p><strong>Values：</strong> 自主性・熱量・継続・敬意・継承・信頼</p>
          </div>
        </section>
      </Reveal>

      {/* Teams */}
      <Reveal>
        <section>
          <h2 className="text-3xl font-bold mb-6">Teams</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg">F.C. ELAN</h3>
              <p className="text-neutral-600">競技志向のトップカテゴリ</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg">F.C. DIEGO</h3>
              <p className="text-neutral-600">バランス重視のメインカテゴリ</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg">ONE HEART</h3>
              <p className="text-neutral-600">初心者歓迎の育成カテゴリ</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg">F.C. DIEGO MASTERS</h3>
              <p className="text-neutral-600">社会人・OB中心のカテゴリ</p>
            </div>
          </div>
        </section>
      </Reveal>

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

      {/* Highlights */}
      <Reveal>
        <section>
          <h2 className="text-3xl font-bold mb-6">Highlights</h2>
          <p className="text-neutral-700">
            同好会選手権 九州大会準優勝（2024）／全国大会ベスト16・総合11位などの実績。過去には2年連続で全国大会準優勝。
            詳細は <a href="/results" className="text-blue-600 hover:underline">Resultsページ</a> へ。
          </p>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal>
        <section className="text-center space-y-4">
          <p className="text-neutral-700">最新情報はInstagramからご覧ください。</p>
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
  );
}