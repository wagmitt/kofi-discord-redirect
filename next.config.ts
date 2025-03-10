import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://discord.gg/ZdVEY5ZN',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
