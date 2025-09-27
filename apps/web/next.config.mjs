import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@devdoc/ui"]
};

export default withContentlayer(nextConfig);
