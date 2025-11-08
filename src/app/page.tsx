import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ===== Hero ===== */}
      <section className="relative h-[70vh] flex items-center">
        {/* 画像（public/hero.JPG） */}
        <Image
          src="/hero.JPG"
          alt="F.C. DIEGO"
          fill
          priority
          className="object-cover"
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/50" />
        {/* テキスト */}
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <Reveal y={16}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              F.C. DIEGO
            </h1>
          </Reveal>
          <Reveal y={16} delay={0.1}>
            <p className="mt-4 max-w-2xl text-white/90">
              九州大学のサッカーサークル。週末に公式戦・対外試合を行い、日々の活動をSNSで発信中。
            </p>
          </Reveal>
          <Reveal y={16} delay={0.2}>
            <div className="mt-6 flex gap-3">
              <Link
                href="/join"
                className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90"
              >
                新歓情報を見る
              </Link>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="rounded-md border border-white/80 text-white px-4 py-2 text-sm hover:bg-white/10"
              >
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== About（紹介） ===== */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-semibold">About us</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-neutral-700 leading-relaxed max-w-3xl">
            F.C. DIEGO は九州大学を中心に活動するサッカーサークルです。学年・レベル・役割に関係なく参加できる
            コミュニティで、週末の公式戦、月間のイベント、日常のトレーニング・交流が魅力です。
          </p>
        </Reveal>
        <Reveal delay={0.2}>
           <h3 className="mt-10 text-xl sm:text-2xl font-semibold">Teams</h3>
           <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "F.C. ELAN", desc: "競技志向のトップカテゴリ" },
            { name: "F.C. DIEGO", desc: "バランス重視のメインカテゴリ" },
            { name: "ONE HEART", desc: "初心者歓迎の育成カテゴリ" },
            { name: "F.C. DIEGO MASTERS", desc: "OB/社会人中心のカテゴリ" },
           ].map((t) => (
             <div key={t.name} className="rounded-xl border p-6">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-neutral-600 mt-1">{t.desc}</div>
             </div>
           ))}
           </div>
        </Reveal>

      </section>

      {/* ===== Highlights（スクロールでふわっと） ===== */}
      <section className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold">Highlights</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="rounded-xl bg-white border overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-neutral-200" />
                  <div className="p-4">
                    <div className="font-medium">試合ハイライト {i}</div>
                    <p className="text-sm text-neutral-600 mt-1">
                      近日公開。Instagramのリールや試合ダイジェストをまとめます。
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
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
