import Image from "next/image";
import Link from "next/link";
import { requireAdmin } from "@/lib/admin-auth";
import { getNewsCategoryLabel } from "@/lib/news-categories";
import { formatNewsDate, getAdminNewsList } from "@/lib/news";
import { deleteNewsAction, logoutAction } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminNewsPage() {
  await requireAdmin();
  const news = await getAdminNewsList();
  const publishedCount = news.filter((item) => item.isPublished).length;
  const draftCount = news.length - publishedCount;

  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Admin
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">News管理</h1>
            <p className="mt-3 text-sm text-neutral-600">
              公式サイトに掲載するお知らせを作成・編集できます。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/news/new"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              新規作成
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:border-neutral-950"
              >
                ログアウト
              </button>
            </form>
          </div>
        </header>

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Total
            </p>
            <p className="mt-2 text-2xl font-bold text-neutral-950">{news.length}</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Published
            </p>
            <p className="mt-2 text-2xl font-bold text-emerald-700">{publishedCount}</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Draft
            </p>
            <p className="mt-2 text-2xl font-bold text-amber-700">{draftCount}</p>
          </div>
        </div>

        {news.length === 0 ? (
          <div className="rounded-2xl border border-neutral-200/80 bg-white px-5 py-8 text-sm text-neutral-600 shadow-sm">
            まだNewsは登録されていません。
          </div>
        ) : (
          <div className="grid gap-4">
            {news.map((item) => (
              <article
                key={item.id}
                className="grid gap-4 rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm sm:grid-cols-[180px_1fr] sm:items-center"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100">
                  {item.imageUrl ? (
                    <Image src={item.imageUrl} alt="" fill className="object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                      No Image
                    </div>
                  )}
                </div>

                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-neutral-950 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                      {getNewsCategoryLabel(item.category)}
                    </span>
                    <span
                      className={[
                        "rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
                        item.isPublished
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700",
                      ].join(" ")}
                    >
                      {item.isPublished ? "公開中" : "下書き"}
                    </span>
                    <time className="text-xs text-neutral-500" dateTime={item.date.toISOString()}>
                      {formatNewsDate(item.date)}
                    </time>
                  </div>

                  <h2 className="truncate text-lg font-bold text-neutral-950">{item.title}</h2>
                  <p className="mt-1 line-clamp-2 text-sm leading-6 text-neutral-600">
                    {item.content}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.isPublished ? (
                      <Link
                        href={`/news/${item.id}`}
                        className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-semibold text-neutral-800 transition hover:border-neutral-950"
                      >
                        表示
                      </Link>
                    ) : null}
                    <Link
                      href={`/admin/news/${item.id}/preview`}
                      className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-semibold text-neutral-800 transition hover:border-neutral-950"
                    >
                      プレビュー
                    </Link>
                    <Link
                      href={`/admin/news/${item.id}/edit`}
                      className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-semibold text-neutral-800 transition hover:border-neutral-950"
                    >
                      編集
                    </Link>
                    <form action={deleteNewsAction}>
                      <input type="hidden" name="id" value={item.id} />
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition hover:border-red-300 hover:bg-red-100"
                      >
                        削除
                      </button>
                    </form>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
