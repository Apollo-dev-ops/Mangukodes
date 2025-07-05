// next.config.mjs
const isGithubPages = process.env.GITHUB_ACTIONS || false;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/Mangukodes' : '',
  assetPrefix: isGithubPages ? '/Mangukodes/' : '',
};

export default nextConfig;
