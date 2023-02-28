/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    emailJsServiceID: process.env.EMAIL_JS_SERVICE_ID || "",
    emailJsTemplateID: process.env.EMAIL_JS_TEMPLATE_ID || "",
    emailJsPublicKey: process.env.EMAIL_JS_PUBLIC_KEY || "",
  },
};

module.exports = nextConfig
