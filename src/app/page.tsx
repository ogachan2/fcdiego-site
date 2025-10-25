// app/page.tsx
import Image from "next/image";

const teams = ["ELAN", "MASTER", "DIEGO", "ONE HEART"];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center">
        <Image
          src="/hero.jpg"      // ← 後で /public/ に画像を置けば表示されます
          alt="F.C. DIEGO"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h1 className="text-white text-4xl sm:text-6xl font-bold tracking-tight">
            F.C. DIEGO
          </h1>
          <p className="text-white/90 mt-4 max-w-xl">
            九州大学最大のサッカーサークル。挑戦と継承を胸に、日々の活動を積み重ねています。
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="/join"
              className="inline-flex items-center rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-100"
            >
              新歓情報を見る
            </a>
            <a
              href="https://www.instagram.com/" // ← 公式URLに差し替え
              target="_blank"
              className="inline-flex items-center rounded-md border border-white/70 text-white px-4 py-2 text-sm hover:bg-white/10"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About us</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed max-w-3xl">
          F.C. DIEGO は九州大学を中心に活動するサッカーサークルです。
          学年・レベル・役割の異なる複数のチームで構成され、誰もが主役になれる場を用意。
          練習・大会・イベント・広報の全てで「挑戦×継承×信頼」を大切にしています。
        </p>
      </section>

      {/* Teams */}
      <section className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
            Teams
          </h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {teams.map((t) => (
              <div key={t} className="rounded-xl border p-6 bg-white text-center hover:shadow-sm transition">
                <p className="text-sm tracking-wider">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} F.C. DIEGO</p>
          <div className="flex items-center gap-4">
            <a className="underline hover:opacity-70" href="/contact">お問い合わせ</a>
            <a className="underline hover:opacity-70" href="https://www.instagram.com/" target="_blank">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
