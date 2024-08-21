/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '185.158.107.161',
        port: '3000',
        pathname: '/uploads/**',
      },
      
    ],
  },
    
}

module.exports = nextConfig
