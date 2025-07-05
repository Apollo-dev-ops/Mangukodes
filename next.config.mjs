// next.config.mjs
const isGithubPages = process.env.GITHUB_ACTIONS || false;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // Conditional config for GitHub Pages vs local dev
  basePath: isGithubPages ? '/mangu-website' : '',
  assetPrefix: isGithubPages ? '/mangu-website/' : '',
};

export default nextConfig;