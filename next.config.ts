import type { NextConfig } from "next";

process.env.NEXT_IGNORE_INCORRECT_LOCKFILE ??= "1";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
