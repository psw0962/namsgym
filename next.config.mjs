/** @type {import('next').NextConfig} */

import withInterceptStdout from 'next-intercept-stdout';

const nextConfig = withInterceptStdout(
  {
    reactStrictMode: true,
    experimental: {
      forceSwcTransforms: true,
    },
    compiler: {
      styledComponents: true,
    },
    // images: {
    //   domains: ['www.namsgym.com', '127.0.0.1', 'localhost', 'localhost:3000'],
    //   formats: ['image/avif', 'image/webp'],
    // },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.namsgym.com',
          port: '', // 비워두면 기본값 사용
          pathname: '**', // 모든 경로 허용
        },
        {
          protocol: 'http',
          hostname: '127.0.0.1',
          port: '',
          pathname: '**',
        },
      ],
      formats: ['image/avif', 'image/webp'],
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.mp3$/,
        use: {
          loader: 'file-loader',
        },
      });
      return config;
    },
  },
  text => (text.includes('Duplicate atom key') ? '' : text),
);

export default nextConfig;
