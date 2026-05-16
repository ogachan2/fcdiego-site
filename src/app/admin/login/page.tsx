import { redirect } from "next/navigation";
import { signInAdmin } from "@/lib/admin-auth";

type Props = {
  searchParams?: Promise<{
    error?: string;
  }>;
};

async function loginAction(formData: FormData) {
  "use server";

  const username = String(formData.get("username") || "");
  const password = String(formData.get("password") || "");
  const ok = await signInAdmin(username, password);

  if (!ok) {
    redirect("/admin/login?error=1");
  }

  redirect("/admin/news");
}

export default async function AdminLoginPage({ searchParams }: Props) {
  const params = searchParams ? await searchParams : {};
  const hasError = params.error === "1";

  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-md px-4 py-16">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Admin
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">ログイン</h1>
          <p className="mt-3 text-sm text-neutral-600">
            News管理画面に入るには管理者アカウントでログインしてください。
          </p>
        </header>

        <form
          action={loginAction}
          className="space-y-5 rounded-2xl border border-neutral-200/80 bg-white px-5 py-6 shadow-sm"
        >
          {hasError ? (
            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              ユーザー名またはパスワードが正しくありません。
            </div>
          ) : null}

          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-neutral-800">
              ユーザー名
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-neutral-800">
              パスワード
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            ログイン
          </button>
        </form>
      </section>
    </div>
  );
}
