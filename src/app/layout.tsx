import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header"; // ← 追加
import Partners from "@/components/Partners";

export const metadata: Metadata = {
  title: "F.C. DIEGO",
  description: "Kyushu Univ. Football Circle",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-white text-neutral-900 antialiased">
        {/* ▼ここだけ置き換え */}
        <Header />
        {/* ▲ここだけ置き換え */}

        {/* Page */}
        <main className="flex-1">{children}</main>

        {/* ← ここにクラブパートナー */}
        <Partners />

        {/* フッターがあればこの下に */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
