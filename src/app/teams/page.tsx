// src/app/teams/page.tsx
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";


export default function TeamsIndexPage() {
  const items = [
    { slug: "elan",     title: "F.C.ELAN",          desc: "競技志向のトップカテゴリ" },
    { slug: "diego",    title: "F.C.DIEGO",         desc: "バランス重視のメインカテゴリ" },
    { slug: "oneheart", title: "ONE HEART",          desc: "初心者歓迎の育成カテゴリ" },
    { slug: "masters",  title: "F.C.DIEGO MASTERS", desc: "社会人・OB中心のカテゴリ" },
  ];

  return (
    <>
    <PageHero page="teams" />
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-10">
      <Reveal>
        <h1 className="text-3xl font-extrabold">Teams</h1>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((it) => (
          <Reveal key={it.slug}>
            <Link
              href={`/teams/${it.slug}`}
              className="block p-6 border rounded-xl hover:shadow-md transition"
            >
              <h2 className="font-semibold text-lg">{it.title}</h2>
              <p className="text-neutral-600 mt-1">{it.desc}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
    </>
  );
}
