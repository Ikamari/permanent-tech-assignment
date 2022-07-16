/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
        "fellowfarmer.s3.amazonaws.com",
        "cdn.fellowfarmer.com"
    ]
  },
  async redirects() {
      return [
          {
              source: "/",
              destination: "/markets",
              permanent: true,
          },
      ]
  },
}

module.exports = nextConfig
