// next-sitemap.js
module.exports = {
    siteUrl: 'https://pothoczuto.xyz',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/404', '/private', '/auth', '/settings'],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/private/']
        }
      ],
      additionalSitemaps: [
        'https://pothoczuto.xyz/sitemap.xml'
      ]
    }
}
