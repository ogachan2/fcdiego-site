// src/components/BannerStrip.tsx
"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

type Props = {
  images: string[];   // public からの相対パス
  height?: number;    // 表示高さ(px)
  speedSec?: number;  // アニメーション速度
};

export default function BannerStrip({
  images,
  height = 200,
  speedSec = 25,
}: Props) {
  // 行全体（横スクロール）のアニメーション時間
  const rowStyle: CSSProperties = {
    animationDuration: `${speedSec}s`,
  };

  // 各画像コンテナの高さを明示
  const itemStyle: CSSProperties = {
    height: `${height}px`,
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/60">
      {/* グラデーションで端をフェードさせる */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-white via-transparent to-white opacity-70" />

      {/* 2列構成でシームレスにスクロール */}
      <div className="flex whitespace-nowrap">
        {/* 1列目 */}
        <ul
          className="flex min-w-full flex-shrink-0 gap-4 px-4 py-3 animate-marquee"
          style={rowStyle}
        >
          {images.map((src, i) => (
            <li
              key={`A${i}`}
              className="relative aspect-[16/9]"
              style={itemStyle} // ここで高さを直接指定（モバイルでも確実に効く）
            >
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

        {/* 2列目（ループ用のコピー） */}
        <ul
          className="flex min-w-full flex-shrink-0 gap-4 px-4 py-3 animate-marquee2"
          style={rowStyle}
        >
          {images.map((src, i) => (
            <li
              key={`B${i}`}
              className="relative aspect-[16/9]"
              style={itemStyle}
            >
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
