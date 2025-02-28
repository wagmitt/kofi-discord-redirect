import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://discord.gg/usvqf8WE',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
