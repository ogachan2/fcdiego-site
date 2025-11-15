// 例: src/app/teams/elan/page.tsx  （diego/oneheart/masters も同様）
import Image from "next/image";
import Reveal from "@/components/Reveal";
import BannerStrip from "@/components/BannerStrip";

export default function TeamElanPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      <Reveal>
        <section className="text-center">
          <div className="flex justify-center mb-4">
            <Image src="/emblem.PNG" alt="F.C. DIEGO emblem" width={120} height={120} />
          </div>
          <h1 className="text-3xl font-extrabold mb-2">F.C.DIEGO MASTERS</h1>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            大学院生・社会人を中心としたカテゴリ。現役時代に培ったつながりを軸に、研究や仕事と両立しながら、サッカーを通じて交流を続けています。
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <ul className="text-neutral-700 space-y-2">
            <li>・活動方針：競技への情熱を持ちつつ、長期的にサッカーを楽しむ環境づくり</li>
            <li>・主な活動：週末の試合／平日トレーニング（任意）</li>
            <li>・主将：荒牧大翼（修士1年）</li>
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <BannerStrip
            images={[
              "/teams/masters/hero.jpg",
              "/teams/masters/sub1.jpg",
              "/teams/masters/sub2.jpg",
              "/teams/masters/sub3.jpg",
            ]}
            height={180}
            speedSec={25}
          />
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="text-2xl font-bold mb-4">Links</h2>
          <p className="text-neutral-700">
            最新情報は <a className="text-blue-600 underline" href="/results">Results</a> や
            <a className="text-blue-600 underline ml-1" href="https://www.instagram.com/diego_pics_" target="_blank">Instagram</a> へ。
          </p>
        </section>
      </Reveal>
    </div>
  );
}
