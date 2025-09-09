// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ["suslop.wasmer.app"], // ✅ allow WP media domain
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'suslop.wasmer.app',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'suslop.wasmer.app',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
};

export default nextConfig;