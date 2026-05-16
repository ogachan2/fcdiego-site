import Link from "next/link";
import { formatNewsDate, getPublishedNewsList } from "@/lib/news";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const news = await getPublishedNewsList();

  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            News
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            お知らせ・最新情報
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            F.C.DIEGOの試合情報、活動報告、クラブからのお知らせを掲載しています。
          </p>
        </header>

        {news.length === 0 ? (
          <p className="text-sm text-neutral-500">
            現在、公開中のお知らせはありません。
          </p>
        ) : (
          <div className="space-y-6">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="block rounded-2xl border border-neutral-200/80 bg-white px-5 py-4 shadow-sm transition hover:border-emerald-300 hover:shadow-md sm:px-6 sm:py-5"
              >
                <article>
                  <div className="mb-2 flex flex-wrap items-baseline gap-3">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                      {item.category || "NEWS"}
                    </span>
                    <time
                      className="text-xs text-neutral-500"
                      dateTime={item.date.toISOString()}
                    >
                      {formatNewsDate(item.date)}
                    </time>
                  </div>

                  <h2 className="mb-1 text-base font-semibold leading-snug sm:text-lg">
                    {item.title}
                  </h2>

                  <p className="line-clamp-2 whitespace-pre-wrap text-sm text-neutral-700">
                    {item.excerpt || item.content}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
