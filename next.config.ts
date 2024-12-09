import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['books.google.com'], // 외부 이미지 호스트 추가
  },
}

export default nextConfig
