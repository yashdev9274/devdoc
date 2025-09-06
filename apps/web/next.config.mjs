import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
  transpilePackages: ['@devdoc/core', '@devdoc/ui'],
  webpack: (config, { isServer }) => {
    // Force resolution of React and React-DOM to the top-level node_modules
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   react: require.resolve('react'),
    //   'react-dom': require.resolve('react-dom'),
    // };
    return config;
  },
};

export default withContentlayer(nextConfig);
