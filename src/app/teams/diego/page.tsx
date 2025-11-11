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
          <h1 className="text-3xl font-extrabold mb-2">F.C. DIEGO</h1>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            サークルのメインカテゴリ。競技と自由のバランスを大切にしながら、週末の公式戦や練習を通じてサッカーを楽しんでいます。
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <ul className="text-neutral-700 space-y-2">
            <li>・活動方針：競技・学業・私生活のバランスを大切に、主体的な活動を推進</li>
            <li>・主な活動：週末の試合／平日トレーニング（任意）</li>
            <li>・主将：上野幸太郎（3年）</li>
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <BannerStrip
            images={[
              "/teams/diego/hero.jpg",
              "/teams/diego/sub1.jpg",
              "/teams/diego/sub2.jpg",
              "/teams/diego/sub3.jpg",
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
