type NewsFormValue = {
  title: string;
  category: string | null;
  date: Date;
  excerpt: string | null;
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
  const dateValue = toDateInputValue(news?.date ?? new Date());

  return (
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
            defaultValue={news?.title ?? ""}
            required
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium text-neutral-800">
            カテゴリ
          </label>
          <input
            id="category"
            name="category"
            type="text"
            defaultValue={news?.category ?? ""}
            placeholder="NEWS"
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-medium text-neutral-800">
            掲載日
          </label>
          <input
            id="date"
            name="date"
            type="date"
            defaultValue={dateValue}
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="excerpt" className="block text-sm font-medium text-neutral-800">
          概要
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          defaultValue={news?.excerpt ?? ""}
          rows={3}
          className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="content" className="block text-sm font-medium text-neutral-800">
          本文
        </label>
        <textarea
          id="content"
          name="content"
          defaultValue={news?.content ?? ""}
          required
          rows={12}
          className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="imageUrl" className="block text-sm font-medium text-neutral-800">
          画像URL
        </label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="url"
          defaultValue={news?.imageUrl ?? ""}
          className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <label className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-3 text-sm text-neutral-800">
        <input
          name="isPublished"
          type="checkbox"
          defaultChecked={news?.isPublished ?? false}
          className="h-4 w-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500"
        />
        公開する
      </label>

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
  );
}
