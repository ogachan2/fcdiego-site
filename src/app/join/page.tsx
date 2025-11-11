import Reveal from "@/components/Reveal";

export default function JoinPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Hero */}
      <Reveal>
        <header className="text-center space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight">Join Us</h1>
          <p className="text-neutral-700 leading-relaxed">
            練習参加は <b>随時募集中</b>。プレイヤー／マネージャーともに歓迎します。まずは体験からどうぞ。
          </p>
          <div className="pt-2">
            <a
              className="inline-flex items-center rounded-lg bg-black text-white px-5 py-3 text-sm hover:opacity-90"
              href="https://www.notion.so/..." // ← 新歓特設（Notion）
              target="_blank"
              rel="noreferrer"
            >
              新歓特設ページを見る
            </a>
          </div>
        </header>
      </Reveal>

      {/* Player */}
      <Reveal>
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">体験参加（プレイヤー）</h2>
            <p className="text-neutral-700 leading-relaxed">
              週末の試合や平日の任意トレーニングに参加できます。レベル不問・兼部OK・途中入会OK。
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white/70 shadow-sm p-6">
              <h3 className="font-semibold mb-3">参加条件 / 持ち物</h3>
              <ul className="list-disc list-inside text-neutral-700 leading-relaxed space-y-1">
                <li>大学生・大学院生（九大生 / 他大生 いずれも可）</li>
                <li>サッカーができる服装、スパイク</li>
                <li>飲料</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white/70 shadow-sm p-6">
              <h3 className="font-semibold mb-3">活動の雰囲気</h3>
              <ul className="list-disc list-inside text-neutral-700 leading-relaxed space-y-1">
                <li>カテゴリー：ELAN / DIEGO / ONE HEART / MASTSRS</li>
                <li>公式戦・対外試合・学生主体の運営</li>
                <li>「最高の4年間」を合言葉に、競技と自由を両立</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center rounded-lg bg-black text-white px-5 py-3 text-sm hover:opacity-90"
              href="https://forms.gle/tryout" // ← 体験参加フォーム
              target="_blank"
              rel="noreferrer"
            >
              体験参加を申し込む
            </a>
            <a
              className="inline-flex items-center rounded-lg border px-5 py-3 text-sm hover:bg-neutral-50"
              href="https://www.instagram.com/diego_pics_/"
              target="_blank"
              rel="noreferrer"
            >
              Instagramで質問する
            </a>
          </div>
        </section>
      </Reveal>

      {/* Manager */}
      <Reveal>
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">マネージャー募集</h2>
            <p className="text-neutral-700 leading-relaxed">
              チーム運営を支える重要なポジションです。初心者歓迎・学年不問。試合帯同やSNS運用、写真・動画、デザイン、広報など
              得意分野から関われます。
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white/70 shadow-sm p-6">
              <h3 className="font-semibold mb-3">主な役割（例）</h3>
              <ul className="list-disc list-inside text-neutral-700 leading-relaxed space-y-1">
                <li>試合帯同（記録・メディカル補助・受付）</li>
                <li>写真 / 動画撮影・編集、SNS投稿（Instagram中心）</li>
                <li>デザイン（試合告知・試合結果）</li>
                <li>広報 / 企画（新歓、イベント）</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white/70 shadow-sm p-6">
              <h3 className="font-semibold mb-3">歓迎スキル（なくてもOK）</h3>
              <ul className="list-disc list-inside text-neutral-700 leading-relaxed space-y-1">
                <li>写真・動画編集（スマホ可 / Canva歓迎）</li>
                <li>SNS運用や文章作成、デザインが好き</li>
                <li>人と話すのが好き、チームを支えるのが好き</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center rounded-lg bg-black text-white px-5 py-3 text-sm hover:opacity-90"
              href="https://forms.gle/manager" // ← マネージャー応募フォーム
              target="_blank"
              rel="noreferrer"
            >
              マネージャーに応募する
            </a>
            <a
              className="inline-flex items-center rounded-lg border px-5 py-3 text-sm hover:bg-neutral-50"
              href="mailto:diego.notice@gmail.com"
            >
              メールで問い合わせる
            </a>
          </div>
        </section>
      </Reveal>

      {/* Flow */}
      <Reveal>
        <section className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight">参加の流れ</h2>
          <ol className="list-decimal list-inside text-neutral-700 leading-relaxed space-y-1">
            <li>フォーム送信 or Instagram で連絡</li>
            <li>担当から日程・集合場所をご案内</li>
            <li>体験参加（持ち物：運動できる服・シューズ・飲料）</li>
            <li>希望カテゴリの相談 → 入会手続き</li>
          </ol>
          <p className="text-neutral-500 text-sm pt-2">
            ※ 体験は保険未加入のため、怪我・体調不良時は自己責任となります。必要に応じて各自でスポーツ保険等をご検討ください。
          </p>
        </section>
      </Reveal>
    </div>
  );
}
