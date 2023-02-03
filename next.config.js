/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    googleTagManagerId: process.env.GOOGLE_TAG_ID,
  },
};

module.exports = nextConfig
