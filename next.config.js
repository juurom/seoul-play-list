/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yeyak.seoul.go.kr',
        port: '',
        pathname: '/web/common/file/**',
      },
    ],
  },
}


module.exports = nextConfig