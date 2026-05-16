import { requireAdmin } from "@/lib/admin-auth";
import NewsForm from "../NewsForm";
import { createNewsAction } from "../actions";

export const dynamic = "force-dynamic";

export default async function AdminNewsNewPage() {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-4xl px-4 py-12">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Admin
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">News新規作成</h1>
          <p className="mt-3 text-sm text-neutral-600">
            公式サイトに掲載するお知らせを作成します。
          </p>
        </header>

        <NewsForm action={createNewsAction} submitLabel="作成する" />
      </section>
    </div>
  );
}
