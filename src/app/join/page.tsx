export default function JoinPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold">Join Us</h1>
      <p className="mt-4 text-neutral-700">
        新歓情報や日程、必要事項を掲載します。Notionの新歓ページがある場合は下のリンクに設定してください。
      </p>
      <div className="mt-6">
        <a
          className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm hover:opacity-90"
          href="https://www.notion.so/..." // ← Notionの新歓URLに差し替え
          target="_blank"
        >
          新歓ページ（Notion）を見る
        </a>
      </div>
    </div>
  );
}
