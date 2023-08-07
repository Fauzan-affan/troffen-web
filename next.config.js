/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'res.cloudinary.com',
    //     port: '',
    //     pathname: '/account123/**',
    //   },
    // ],
  },
  // images: {
  //   unoptimized: true,
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "https://api.troffen.com/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
