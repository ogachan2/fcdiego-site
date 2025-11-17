// src/app/results/page.tsx
"use client";

import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";


type YearBlock = {
  year: number;
  items: string[];
};

const results: YearBlock[] = [
  {
    year: 2025,
    items: [
      // ↓スクショから読めた範囲を初期投入。数値は要確認。
      "全国大学同好会サッカー選手権大会 九州予選 準優勝（ELAN）", // TODO: 要確認
    ],
  },
  {
    year: 2024,
    items: [
      // ↓スクショから読めた範囲を初期投入。数値は要確認。
      "全国大学同好会サッカー選手権大会 九州予選 準優勝（ELAN）", // TODO: 要確認
      "全国大学同好会サッカー選手権大会 全国大会 11位（ELAN）",   // TODO: 要確認
      // 例：あなたの追記例
      // "福岡地区社会人リーグ 優勝（MASTERS）",
      // "アットホームチャンピオンシップ 九州 優勝（ELAN）",
    ],
  },
  {
    year: 2023,
    items: [
      "ロイスタ春季リーグ 優勝（ELAN）",
      "全国大学同好会サッカー選手権大会 九州予選 3位（ELAN）",     // TODO: 要確認
      "全国大学同好会サッカー選手権大会 全国大会 ベスト8（ELAN）",  // TODO: 要確認
      "福岡市長杯 準優勝（ELAN）",                                   // TODO: 要確認
    ],
  },
  {
    year: 2022,
    items: [
      "ロイスタ春季リーグ 優勝（ELAN）",
      "全国大学同好会サッカー選手権大会 九州予選 優勝（ELAN）",     // TODO: 要確認
      "全国大学同好会サッカー選手権大会 全国大会 9位（ELAN）",       // TODO: 要確認
    ],
  },
  {
    year: 2021,
    items: [
      "ロイスタ春季リーグ 優勝（ELAN）",                    // 5連覇の一部。年ごとに分けて記載OK
      "福岡県社会人サッカーリーグ1部 順位決定トーナメント 準優勝（ELAN）",
      "福岡県知事杯 ベスト4（ELAN）",                               // TODO: 要確認
      "福岡市長杯 ベスト4（MASTERS）",                               // TODO: 要確認
      "全国大学同好会サッカー選手権大会 九州予選 3位（ELAN）",       // TODO: 要確認
      "全国大学同好会サッカー選手権大会 全国大会 5位（ELAN）",       // TODO: 要確認
    ],
  },
  {
    year: 2020,
    items: [
      "ロイスタ春季リーグ 優勝（ELAN）",
    ],
  },
  {
    year: 2019,
    items: [
      "ロイスタ春季リーグ 優勝（ELAN）",
      "福岡市社会人リーグ1部 優勝（MASTERS）",
      "全国大学同好会サッカー選手権大会 九州予選 優勝（ELAN）",     // TODO: 要確認
      "全国大学同好会サッカー選手権大会 全国大会 準優勝（ELAN）",   // TODO: 要確認
    ],
  },
  {
    year: 2018,
    items: [
      "全国大学同好会サッカー選手権大会 九州予選 準優勝（ELAN）",   // TODO: 要確認
      "全国大学同好会サッカー選手権大会 全国大会 準優勝（ELAN）",   // TODO: 要確認
    ],
  },
];

// ====== UI ======
export default function ResultsPage() {
  return (
    <>
    <PageHero page="results" />
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-14">
      <Reveal>
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight">Results</h1>
          <p className="text-neutral-600">
            年度ごとの主な戦績を掲載しています。太字・補足などは自由に加筆してください。
          </p>
        </header>
      </Reveal>

      {/* 目次（年ジャンプ） */}
      <Reveal>
        <nav className="flex flex-wrap gap-3 justify-center">
          {results
            .filter(y => y.items.length > 0)
            .map(({ year }) => (
              <a
                key={year}
                href={`#y${year}`}
                className="rounded-full border px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-50"
              >
                {year}
              </a>
            ))}
        </nav>
      </Reveal>

      {/* 本文 */}
      <section className="space-y-12">
        {results.map(({ year, items }) => (
          <Reveal key={year}>
            <div id={`y${year}`} className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{year}年度</h2>
              {items.length === 0 ? (
                <p className="text-neutral-500">（この年の実績は編集中です）</p>
              ) : (
                <ul className="list-disc pl-6 space-y-2 text-neutral-800">
                  {items.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </section>

      {/* 編集メモ */}
      <Reveal>
        <aside className="mt-8 rounded-xl border bg-neutral-50 p-4 text-sm text-neutral-600">
          <p className="mb-1 font-semibold">編集メモ</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>本文の文言は <code>results</code> 配列を直接編集してください。</li>
            <li>大会名の表記ゆれ（例：九州予選 / 九州大会予選）や順位は、元データに合わせて調整を。</li>
            <li>必要なら年度を追加（例：<code>{`{ year: 2025, items: [] }`}</code>）。</li>
          </ul>
        </aside>
      </Reveal>
    </div>
   </>
  );
}
