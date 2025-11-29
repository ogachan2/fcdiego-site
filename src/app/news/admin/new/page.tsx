// src/app/news/admin/new/page.tsx
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function NewsAdminNewPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !content.trim()) {
      setError("タイトルと本文は必須です。");
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          content: content.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "投稿に失敗しました。");
      }

      // 成功したら一覧ページへ
      router.push("/news");
      router.refresh(); // 一覧の再取得
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message || "投稿に失敗しました。");
      } else {
        setError("投稿に失敗しました。");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="max-w-4xl mx-auto px-4 py-12">
        {/* タイトル帯 */}
        <header className="mb-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase">
            Admin
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            ニュース新規投稿
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            サイトに表示するお知らせやブログ記事をここから追加できます。
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white rounded-2xl border border-neutral-200/70 shadow-sm px-5 py-6 sm:px-6 sm:py-7"
        >
          {/* エラー表示 */}
          {error && (
            <div className="rounded-md bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* タイトル */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-neutral-800">
              タイトル
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="例）九州大会出場のお知らせ"
              required
            />
          </div>

          {/* 本文 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-neutral-800">
              本文
            </label>
            <textarea
              className="w-full min-h-[240px] rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white resize-vertical"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={`例）\nF.C.DIEGOは〇月〇日に開催される九州大会に出場します。...`}
              required
            />
          </div>

          {/* ボタン */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "投稿中..." : "投稿する"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
