import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@devdoc/ui", ".contentlayer"]
};

export default withContentlayer(nextConfig);
