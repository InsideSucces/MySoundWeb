/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: {
      protocol: 'http',
      hostname: 'avatars.githubusercontent.com',
      port: '',
      pathname: '/u/**',
    }
  }
}

module.exports = nextConfig
