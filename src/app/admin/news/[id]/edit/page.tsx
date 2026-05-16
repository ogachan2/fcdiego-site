import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin-auth";
import { getAdminNewsById } from "@/lib/news";
import NewsForm from "../../NewsForm";
import { updateNewsAction } from "../../actions";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminNewsEditPage({ params }: Props) {
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

  const updateWithId = updateNewsAction.bind(null, id);

  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Admin
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">News編集</h1>
          <p className="mt-3 text-sm text-neutral-600">
            登録済みのお知らせを編集します。下書きにすると公開ページからは非表示になります。
          </p>
        </header>

        <NewsForm action={updateWithId} news={news} submitLabel="更新する" />
      </section>
    </div>
  );
}
