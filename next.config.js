/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  },
  images: {
    domains: ['slelguoygbfzlpylpxfs.supabase.co', 'assets.nflxext.com'],
  },
}

module.exports = nextConfig