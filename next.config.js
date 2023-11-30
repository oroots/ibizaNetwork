/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/Ueav7z4qAF",
        permanent: false,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/rpibiza/",
        permanent: false,
      },
      {
        source: "/tiktok",
        destination: "https://www.tiktok.com/@gtaibiza",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
