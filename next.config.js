/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'rocketseat-cdn.s3-sa-east-1.amazonaws.com',
              port: '',
              pathname: '/modulo-redux/**',
            },
        ],
    },
}

module.exports = nextConfig
