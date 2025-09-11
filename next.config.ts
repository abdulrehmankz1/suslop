/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "suslop.wasmer.app",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "suslop.wasmer.app",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
