/** @type {import('next').NextConfig} */

const securityHeaders = [
  //More info on https://nextjs.org/docs/advanced-features/security-headers
  {
    key: "Strict-Transport-Security",
    value: "max-age=95536000; includeSubDomains; preload",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "0",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  /*{
      key: "Referrer-Policy",
      value: "origin-when-cross-origin",
    },
    {
      key: "Content-Security-Policy",
      //value: // Your CSP Policy
    },*/
];

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/uploads/:path",
        destination: "https://strapi-uysh.onrender.com/uploads/:path",
      },
      {
        source: "/publication/:path", //previous app had "publication" instead of "publications"
        destination: "/publications/:path",
      },
    ];
  },
};

export default nextConfig;
