// prisma.config.ts
// Prisma 7 用の設定ファイル

import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  // さっきの schema.prisma を見るようにする
  schema: "prisma/schema.prisma",

  // マイグレーション保存先
  migrations: {
    path: "prisma/migrations",
  },

  // 接続情報は .env / Vercel の Environment Variables から読む
  datasource: {
    url: env("DATABASE_URL"),
    // DIRECT_URL も .env と Vercel に入れてあるのでそのまま使う
    //@ts-ignore
    directUrl: env("DIRECT_URL"),
  },
});
