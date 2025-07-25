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
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.namsgym.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'http',
          hostname: '127.0.0.1',
          port: '',
          pathname: '**',
        },
      ],
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
