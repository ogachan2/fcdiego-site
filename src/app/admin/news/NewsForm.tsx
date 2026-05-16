"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { NEWS_CATEGORIES, getNewsCategoryLabel } from "@/lib/news-categories";

type NewsFormValue = {
  title: string;
  category: string | null;
  date: Date;
  content: string;
  imageUrl: string | null;
  isPublished: boolean;
};

type Props = {
  action: (formData: FormData) => void | Promise<void>;
  news?: NewsFormValue;
  submitLabel: string;
};

function toDateInputValue(date: Date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export default function NewsForm({ action, news, submitLabel }: Props) {
  const [title, setTitle] = useState(news?.title ?? "");
  const [category, setCategory] = useState(news?.category ?? NEWS_CATEGORIES[0].value);
  const [date, setDate] = useState(toDateInputValue(news?.date ?? new Date()));
  const [content, setContent] = useState(news?.content ?? "");
  const [status, setStatus] = useState(news?.isPublished ? "published" : "draft");
  const [removeImage, setRemoveImage] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(news?.imageUrl ?? null);

  const previewText = useMemo(() => {
    return content.trim() || "本文を入力するとここにプレビューされます。";
  }, [content]);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <form
        action={action}
        className="space-y-6 rounded-2xl border border-neutral-200/80 bg-white px-5 py-6 shadow-sm sm:px-6 sm:py-7"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <label htmlFor="title" className="block text-sm font-medium text-neutral-800">
              タイトル
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="block text-sm font-medium text-neutral-800">
              カテゴリ
            </label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {NEWS_CATEGORIES.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="date" className="block text-sm font-medium text-neutral-800">
              掲載日
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="content" className="block text-sm font-medium text-neutral-800">
            本文
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
            rows={12}
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="image" className="block text-sm font-medium text-neutral-800">
            画像
          </label>
          <input type="hidden" name="existingImageUrl" value={news?.imageUrl ?? ""} />
          <input type="hidden" name="status" value={status} />
          {removeImage ? <input type="hidden" name="removeImage" value="on" /> : null}
          <input
            id="image"
            name="image"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) {
                setRemoveImage(false);
                setImagePreview(URL.createObjectURL(file));
              }
            }}
            className="block w-full text-sm text-neutral-700 file:mr-4 file:rounded-lg file:border-0 file:bg-neutral-950 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-neutral-800"
          />
          <p className="text-xs leading-5 text-neutral-500">
            JPG / PNG / WebP、5MBまで。新しい画像を選ぶと保存時にアップロードされます。
          </p>

          {imagePreview ? (
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="relative aspect-[16/9]">
                <Image src={imagePreview} alt="" fill className="object-cover" unoptimized />
              </div>
              {news?.imageUrl ? (
                <label className="flex items-center gap-2 border-t border-neutral-200 px-3 py-2 text-sm text-neutral-700">
                  <input
                    type="checkbox"
                    checked={removeImage}
                    onChange={(event) => {
                      setRemoveImage(event.target.checked);
                      setImagePreview(event.target.checked ? null : news.imageUrl);
                    }}
                    className="h-4 w-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  現在の画像を削除する
                </label>
              ) : null}
            </div>
          ) : null}
        </div>

        <fieldset className="space-y-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
          <legend className="px-1 text-sm font-medium text-neutral-800">公開状態</legend>
          <label className="flex items-center gap-3 text-sm text-neutral-800">
            <input
              type="radio"
              checked={status === "draft"}
              onChange={() => setStatus("draft")}
              className="h-4 w-4 border-neutral-300 text-emerald-600 focus:ring-emerald-500"
            />
            下書き
          </label>
          <label className="flex items-center gap-3 text-sm text-neutral-800">
            <input
              type="radio"
              checked={status === "published"}
              onChange={() => setStatus("published")}
              className="h-4 w-4 border-neutral-300 text-emerald-600 focus:ring-emerald-500"
            />
            公開
          </label>
        </fieldset>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            {submitLabel}
          </button>
          <a
            href="/admin/news"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 transition hover:border-neutral-950"
          >
            キャンセル
          </a>
        </div>
      </form>

      <aside className="h-fit rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm lg:sticky lg:top-24">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Preview
          </p>
          <span
            className={[
              "rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
              status === "published"
                ? "bg-emerald-50 text-emerald-700"
                : "bg-amber-50 text-amber-700",
            ].join(" ")}
          >
            {status === "published" ? "公開" : "下書き"}
          </span>
        </div>

        <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
          <div className="relative aspect-[16/10] bg-neutral-100">
            {imagePreview ? (
              <Image src={imagePreview} alt="" fill className="object-cover" unoptimized />
            ) : (
              <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                No Image
              </div>
            )}
          </div>
          <div className="p-4">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-neutral-950 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                {getNewsCategoryLabel(category)}
              </span>
              <span className="text-xs text-neutral-500">{date}</span>
            </div>
            <h2 className="text-lg font-bold leading-snug text-neutral-950">
              {title || "タイトルを入力してください"}
            </h2>
            <p className="mt-3 line-clamp-4 whitespace-pre-wrap text-sm leading-6 text-neutral-600">
              {previewText}
            </p>
          </div>
        </article>
      </aside>
    </div>
  );
}
