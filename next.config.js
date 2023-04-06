/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env :{
    CONTENTFUL_SPACE_ID : "viycukvlh0rc",
    CONTENTFUL_ACCESS_KEY : '_4klXEsxP4aFBaKXZ4PvRsjVdckdiojre_BB1vUtnNw'
  }, 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
