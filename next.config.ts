import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://discord.gg/pK5QGDTNxf',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
