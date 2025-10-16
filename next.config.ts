import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com", // optional example
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org", // optional example
      },
    ],
  },
};

export default nextConfig;
