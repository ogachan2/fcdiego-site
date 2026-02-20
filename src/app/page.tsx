import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ===== Hero ===== */}
      <HeroSlider />

      {/* ===== Brand Message Band (Black Ver.) ===== */}
      <section className="border-y border-black bg-black">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <p className="text-center text-xs sm:text-sm font-medium text-white tracking-wide">
            F.C.DIEGO｜Kyushu University Football Circle Since 1993
          </p>
        </div>
      </section>

    
      {/* ===== About（紹介） ===== */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* About us（テキスト＋画像） */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-semibold">About us</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-neutral-700 leading-relaxed max-w-3xl">
                F.C.DIEGO は九州大学のサッカーサークルです。毎週土曜日に、福岡市内のグラウンドで活動しています。
                サッカーが好きな学生が集まり、試合や練習、イベントを通して「最高の4年間」を一緒に過ごしています。
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  F.C.DIEGOについて詳しく見る
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src="/top/top1.JPEG"
                alt="F.C.DIEGO about"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Teams ティーザー（テキスト＋画像） */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal delay={0.25}>
              <h3 className="text-xl sm:text-2xl font-semibold">Teams</h3>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-3 text-neutral-700 text-sm sm:text-base max-w-3xl">
                目的やレベルに合わせて選べる、4つのカテゴリで活動しています。
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "F.C.ELAN",
                  "F.C.DIEGO",
                  "ONE HEART",
                  "F.C.DIEGO MASTERS",
                ].map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-neutral-300 px-3 py-1 text-xs sm:text-sm text-neutral-800 bg-white"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-4">
                <Link
                  href="/teams"
                  className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-sky-700 border border-sky-100 bg-sky-50 hover:bg-sky-100"
                >
                  チーム紹介を見る
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.33}>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src="/top/top2.JPEG"
                alt="F.C.DIEGO teams"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

     {/* Highlights */}
<Reveal>
  <section className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-6">Highlights</h2>
    <p className="text-neutral-700 max-w-3xl">
      同好会選手権 九州大会準優勝（2024）／全国大会ベスト16・総合11位などの実績。過去には2年連続で全国大会準優勝。
      詳細は{" "}
      <a href="/results" className="text-blue-600 hover:underline">
        Resultsページ
      </a>{" "}
      へ。
    </p>
  </section>
</Reveal>

      {/* ===== CTA（参加を促す） ===== */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold">
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
                className="inline-flex items-center rounded-md bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90"
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