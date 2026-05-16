import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <>
      <PageHero page="contact" />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <Reveal>
          <section className="grid items-center gap-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:grid-cols-[1fr_400px] md:gap-10 md:p-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-neutral-950" />
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                  Contact
                </span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
                Contact
              </h1>
              <p className="mt-3 text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
                ご連絡はInstagramのDMからお願いします。
              </p>
              <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base sm:leading-8">
                練習参加、見学、マネージャー希望、試合依頼、その他のお問い合わせは、
                F.C.DIEGO公式Instagramまでお気軽にご連絡ください。
              </p>
              <p className="mt-2 text-sm leading-7 text-neutral-600 sm:text-base">
                練習場所や日程の最新情報もInstagramで配信しています。
                参加を迷っている方からの質問も歓迎しています。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/diego_pics_/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                >
                  InstagramでDMする
                </a>
                <a
                  href="/join"
                  className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-50"
                >
                  募集情報を見る
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 shadow-sm ring-1 ring-black/5">
              <Image
                src="/about/about7.JPEG"
                alt="F.C.DIEGO contact"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-white/10" />
              <div className="absolute bottom-4 left-4 h-10 w-10 border-l-2 border-t-2 border-white/80" />
              <div className="absolute right-4 top-4 h-10 w-10 border-r-2 border-t-2 border-white/80" />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["練習参加", "初参加や見学希望の連絡はこちらから。"],
              ["マネージャー希望", "活動内容や雰囲気についてもDMで質問できます。"],
              ["試合依頼", "対外試合や交流戦のご相談も受け付けています。"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <h2 className="text-base font-bold text-neutral-950">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
              </div>
            ))}
          </section>
        </Reveal>
      </main>
    </>
  );
}
