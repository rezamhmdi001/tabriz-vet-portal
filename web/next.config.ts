import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NEXT_STANDALONE === "1" ? { output: "standalone" as const } : {}),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
