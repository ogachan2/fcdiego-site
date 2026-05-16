import type { NextConfig } from "next";

process.env.NEXT_IGNORE_INCORRECT_LOCKFILE ??= "1";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
