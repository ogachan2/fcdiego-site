import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin-auth";
import { getNewsCategoryLabel } from "@/lib/news-categories";
import { formatNewsDate, getAdminNewsById } from "@/lib/news";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminNewsPreviewPage({ params }: Props) {
  await requireAdmin();

  const { id: idParam } = await params;
  const id = Number(idParam);

  if (!Number.isInteger(id) || id <= 0) {
    notFound();
  }

  const news = await getAdminNewsById(id);

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-amber-200 bg-amber-50">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-4 text-sm text-amber-800 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span className="font-semibold">
            {news.isPublished ? "公開中の記事プレビュー" : "下書きプレビュー"}
          </span>
          <Link
            href={`/admin/news/${news.id}/edit`}
            className="inline-flex items-center justify-center rounded-lg border border-amber-300 bg-white px-3 py-2 text-sm font-semibold text-amber-900 transition hover:border-amber-500"
          >
            編集に戻る
          </Link>
        </div>
      </div>

      <article>
        <header className="border-b border-neutral-200 bg-neutral-950 text-white">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <Link
              href="/admin/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              ← News管理へ戻る
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-950">
                {getNewsCategoryLabel(news.category)}
              </span>
              <time className="text-sm text-white/60" dateTime={news.date.toISOString()}>
                {formatNewsDate(news.date)}
              </time>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {news.title}
            </h1>
          </div>
        </header>

        <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="whitespace-pre-wrap text-base leading-8 text-neutral-800">
            {news.content}
          </div>
        </section>

        {news.imageUrl ? (
          <div className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
            <div className="relative mx-auto aspect-[16/9] max-w-2xl overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm">
              <Image
                src={news.imageUrl}
                alt=""
                fill
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        ) : null}
      </article>
    </div>
  );
}
