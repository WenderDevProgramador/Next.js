import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2pn8kiwq2w21t.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};


export default nextConfig;

