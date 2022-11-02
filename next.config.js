/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  env: {
    serverURI: 'http://localhost:4000/graphql',
  },
};

module.exports = nextConfig;
