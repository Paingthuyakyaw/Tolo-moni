import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui.shadcn.com",
      },
    ],
  },
};

export default nextConfig;
