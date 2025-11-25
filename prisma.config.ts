// prisma.config.ts
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",
  },

  // ★ ここを追加：従来のエンジンを使う設定
  client: {
    engineType: "library",
  },

  datasource: {
    url: env("DATABASE_URL"),
    //@ts-ignore
    directUrl: env("DIRECT_URL"),
  },
});
