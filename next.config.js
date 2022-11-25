const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en'
  },
  images: {
    domains: ['github-link-card.s3.ap-northeast-1.amazonaws.com']
  }
}

module.exports = nextConfig
