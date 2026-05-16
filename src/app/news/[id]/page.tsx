import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { getNewsCategoryLabel } from "@/lib/news-categories";
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
    <div className="min-h-screen bg-white">
      <PageHero page="news" />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition hover:text-neutral-950"
        >
          ← お知らせ一覧へ戻る
        </Link>

        <header className="mt-8 border-b border-neutral-200 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-neutral-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              {getNewsCategoryLabel(news.category)}
            </span>
            <time className="text-sm text-neutral-500" dateTime={news.date.toISOString()}>
              {formatNewsDate(news.date)}
            </time>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
            {news.title}
          </h1>
        </header>

        <section className="py-9">
          <div className="whitespace-pre-wrap text-base leading-8 text-neutral-800">
            {news.content}
          </div>
        </section>

        {news.imageUrl ? (
          <figure className="border-t border-neutral-200 pt-8">
            <div className="relative mx-auto aspect-[16/9] max-w-2xl overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm">
              <Image
                src={news.imageUrl}
                alt=""
                fill
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
        ) : null}
      </article>
    </div>
  );
}
