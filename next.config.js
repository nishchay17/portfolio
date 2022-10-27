/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["bkgsewdluleimqnwhzyo.supabase.co"],
  },
  productionBrowserSourceMaps: true,
};
