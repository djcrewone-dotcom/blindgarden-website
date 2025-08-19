/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel 환경 최적화
  output: 'standalone',
  
  // 이미지 최적화 설정 (Vercel 환경에 맞춤)
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Vercel 환경에서는 모든 도메인 허용
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Vercel 환경 감지
  env: {
    VERCEL: process.env.VERCEL || 'false',
  },
  
  // 타입스크립트 설정
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint 설정
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
