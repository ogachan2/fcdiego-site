import Link from "next/link";
import PageHero from "@/components/PageHero";
import { getNewsCategoryLabel } from "@/lib/news-categories";
import { formatNewsDate, getPublishedNewsList } from "@/lib/news";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const news = await getPublishedNewsList();

  return (
    <div className="min-h-screen bg-white">
      <PageHero page="news" />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
            Latest
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
            最新のお知らせ
          </h2>
          <p className="mt-4 text-sm leading-7 text-neutral-600">
            F.C.DIEGOの試合情報、活動報告、イベント情報、クラブからのお知らせを掲載しています。
          </p>
        </div>

        {news.length === 0 ? (
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-10 text-sm text-neutral-600">
            現在、公開中のお知らせはありません。
          </div>
        ) : (
          <div className="grid gap-4">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group block rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-neutral-950 hover:shadow-lg sm:p-6"
              >
                <article className="grid gap-4 sm:grid-cols-[140px_1fr_auto] sm:items-center">
                  <div className="flex items-center gap-3 sm:block">
                    <time
                      className="block text-sm font-semibold text-neutral-950 sm:text-base"
                      dateTime={item.date.toISOString()}
                    >
                      {formatNewsDate(item.date)}
                    </time>
                    <span className="mt-0 inline-flex rounded-full bg-neutral-950 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white sm:mt-3">
                      {getNewsCategoryLabel(item.category)}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-snug text-neutral-950 transition group-hover:translate-x-1 sm:text-xl">
                      {item.title}
                    </h3>
                  </div>

                  <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-sm text-neutral-500 transition group-hover:translate-x-1 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white sm:flex">
                    →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
