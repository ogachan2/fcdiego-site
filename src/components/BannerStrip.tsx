// src/components/BannerStrip.tsx
"use client";

import Image from "next/image";
import React from "react";

type Props = {
  images: string[];     // publicからの相対パス
  height?: number;      // 表示高さ(px)
  speedSec?: number;    // アニメーション速度
};

export default function BannerStrip({ images, height = 200, speedSec = 25 }: Props) {
  const style = { animationDuration: `${speedSec}s` };

  // # 追加: CSSカスタムプロパティ(--h)を型安全に渡すための型
  type CSSVars = React.CSSProperties & { ["--h"]?: string };

  // # 追加: any回避のため、型付きオブジェクトを経由してstyleに渡す
  const hVar: CSSVars = { "--h": `${height}px` };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/60">
      {/* グラデーションで端をフェード */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-white via-transparent to-white opacity-70" />

      {/* 2列構成でシームレスにスクロール */}
      <div className="flex whitespace-nowrap">
        <ul className="flex min-w-full flex-shrink-0 gap-4 px-4 py-3 animate-marquee" style={style}>
          {images.map((src: string, i: number) => (
            <li key={`A${i}`} className="relative aspect-[16/9] h-[--h]" style={hVar}>{/* # 変更: as any 削除 */}
              <Image
                src={src}
                alt={`banner-${i}`}
                width={height * 2}
                height={height}
                className="h-full w-auto rounded-xl object-cover"
                priority={i < 2}
              />
            </li>
          ))}
        </ul>

        <ul className="flex min-w-full flex-shrink-0 gap-4 px-4 py-3 animate-marquee2" style={style}>
          {images.map((src: string, i: number) => (   /* # 変更: map引数に型を明示 */
            <li key={`B${i}`} className="relative aspect-[16/9] h-[--h]" style={hVar}>{/* # 変更: as any 削除 */}
              <Image
                src={src}
                alt={`banner-dup-${i}`}
                width={height * 2}
                height={height}
                className="h-full w-auto rounded-xl object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
