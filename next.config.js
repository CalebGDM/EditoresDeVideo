/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['blog.jcplaboratory.org']
  }
}

module.exports = nextConfig
