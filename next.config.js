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
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'icare.seoul.go.kr',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'yongsanyouth.or.kr',
        port: '',
        pathname: '/**',
      },
    ],


  },
}


module.exports = nextConfig