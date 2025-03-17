/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['react-leaflet', 'leaflet'],
  webpack: (config) => {
    return config;
  }
};

module.exports = nextConfig;
