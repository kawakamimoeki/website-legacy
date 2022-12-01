const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true
  },
  i18n: {
    locales: ['en-US', 'ja'],
    defaultLocale: 'en-US'
  },
  images: {
    domains: ['github-link-card.s3.ap-northeast-1.amazonaws.com']
  }
}

module.exports = nextConfig
