/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;
