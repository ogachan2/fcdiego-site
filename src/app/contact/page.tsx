import PageHero from "@/components/PageHero";


export default function ContactPage() {
  return (
  <>
    <PageHero page="contact" />

    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-4 text-neutral-700">
        代表連絡先やお問い合わせフォームを設置します。まずはGoogleフォームのURLを貼ればOKです。
      </p>
      <div className="mt-6">
        <a
          className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:bg-neutral-50"
          href="https://docs.google.com/forms/..." // ← GoogleフォームURLに差し替え
          target="_blank"
        >
          お問い合わせフォームを開く
        </a>
      </div>
    </div>
  </>
  );
}
