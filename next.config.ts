import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "967aobxlmqad6imy.public.blob.vercel-storage.com",
        pathname: "/Abdi Pictures/**",
      },
    ],
  },
};

export default nextConfig;
