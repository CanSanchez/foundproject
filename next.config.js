/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
 //create remote patterns for https://placedog.net/200/300
    domains: ['placekitten.com', 'placedog.net']
  },
}

module.exports = nextConfig
