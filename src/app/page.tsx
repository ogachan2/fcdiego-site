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

        {/* ===== Teams ティーザー ===== */}
        <Reveal delay={0.25}>
          <h3 className="mt-12 text-xl sm:text-2xl font-semibold">Teams</h3>
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
      </section>

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
