import Link from "next/link";
import { notFound } from "next/navigation";
import { formatNewsDate, getPublishedNewsById } from "@/lib/news";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NewsDetailPage({ params }: Props) {
  const { id: idParam } = await params;
  const id = Number(idParam);

  if (!Number.isInteger(id) || id <= 0) {
    notFound();
  }

  const news = await getPublishedNewsById(id);

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="mb-6 text-xs text-neutral-500">
          <Link
            href="/news"
            className="inline-flex items-center gap-1 font-medium text-emerald-700 hover:text-emerald-800"
          >
            ← お知らせ一覧へ戻る
          </Link>
        </div>

        <div className="mb-3 flex flex-wrap items-baseline gap-3">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
            {news.category || "NEWS"}
          </span>
          <time className="text-xs text-neutral-500" dateTime={news.date.toISOString()}>
            {formatNewsDate(news.date)}
          </time>
        </div>

        <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
          {news.title}
        </h1>

        {news.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={news.imageUrl}
            alt=""
            className="mb-6 aspect-[16/9] w-full rounded-2xl border border-neutral-200/80 object-cover shadow-sm"
          />
        ) : null}

        <article className="rounded-2xl border border-neutral-200/80 bg-white px-5 py-6 shadow-sm sm:px-6 sm:py-7">
          <div className="whitespace-pre-wrap text-sm leading-7 text-neutral-800 sm:text-base">
            {news.content}
          </div>
        </article>
      </section>
    </div>
  );
}
