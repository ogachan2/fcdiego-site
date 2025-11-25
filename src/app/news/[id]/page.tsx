// src/app/news/[id]/page.tsx
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

type Props = {
  params: {
    id: string;
  };
};

export default async function NewsDetailPage({ params }: Props) {
  const id = Number(params.id);
  if (Number.isNaN(id)) {
    notFound();
  }

  const news = await prisma.news.findUnique({
    where: { id },
  });

  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="max-w-3xl mx-auto px-4 py-12">
        {/* パンくず & 戻るリンク */}
        <div className="mb-6 text-xs text-neutral-500 flex items-center gap-2">
          <Link
            href="/news"
            className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-medium"
          >
            ← お知らせ一覧へ戻る
          </Link>
        </div>

        {/* ラベル & 日付 */}
        <div className="flex items-baseline gap-3 mb-3">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
            NEWS
          </span>
          <time
            className="text-xs text-neutral-500"
            dateTime={news.createdAt.toISOString()}
          >
            {news.createdAt.toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "short",
            })}
          </time>
        </div>

        {/* タイトル */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
          {news.title}
        </h1>

        {/* 本文 */}
        <article className="rounded-2xl bg-white border border-neutral-200/80 shadow-sm px-5 py-6 sm:px-6 sm:py-7">
          <div className="prose prose-sm sm:prose-base max-w-none whitespace-pre-wrap">
            {news.content}
          </div>
        </article>
      </section>
    </main>
  );
}
