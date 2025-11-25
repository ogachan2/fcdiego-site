// 型を追加（NewsPage の上でOK）
type NewsItem = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
};

// src/app/news/page.tsx
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const news = await prisma.news.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="max-w-5xl mx-auto px-4 py-12">
        {/* タイトル帯 */}
        <header className="mb-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase">
            News
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            お知らせ・最新情報
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            F.C.DIEGO の活動に関するお知らせやブログを掲載していく予定です。
          </p>
        </header>

        {/* 一覧 */}
        {news.length === 0 ? (
          <p className="text-sm text-neutral-500">
            まだニュースは登録されていません。
          </p>
        ) : (
          <div className="space-y-6">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="block rounded-2xl bg-white border border-neutral-200/80 shadow-sm px-5 py-4 sm:px-6 sm:py-5 hover:border-emerald-300 hover:shadow-md transition"
              >
                <article>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                      NEWS
                    </span>
                    <time
                      className="text-xs text-neutral-500"
                      dateTime={item.createdAt.toISOString()}
                    >
                      {item.createdAt.toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <h2 className="text-base sm:text-lg font-semibold leading-snug mb-1">
                    {item.title}
                  </h2>

                  <p className="text-sm text-neutral-700 line-clamp-2 whitespace-pre-wrap">
                    {item.content}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
