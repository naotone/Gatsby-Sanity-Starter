require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})
const isProd = process.env.NODE_ENV === 'production'
const siteUrl = 'https://test.test'
const googleAnalyticsId = 'UA-'
const clientConfig = require('./client-config')

module.exports = {
  siteMetadata: {
    siteUrl: siteUrl
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: ``,
        short_name: ``,
        start_url: `/`,
        background_color: `#171616`,
        theme_color: `#171616`,
        display: `standalone`,
        lang: `en`,
        // icon: `src/images/icon.png`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          },
          production: {
            policy: [{userAgent: '*', allow: '/'}]
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: googleAnalyticsId
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    }
  ]
}
