import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/StrixCore",
  images: {
    loader: "custom",
    loaderFile: "./app/lib/image-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
};

export default nextConfig;
