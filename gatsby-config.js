module.exports = {
  siteMetadata: {
    title: "Alex Lende",
    siteUrl: "https://ajlende.com",
  },
  plugins: [
    { resolve: "gatsby-plugin-sitemap" },
    { resolve: "gatsby-plugin-catch-links" },
    { resolve: "gatsby-plugin-react-helmet" },
    { resolve: "gatsby-plugin-sass" },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-105831475-1",
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
          logo: './src/favicon.svg',
          dir: 'ltr',
          lang: 'en-US',
          background: '#073746',
          theme_color: '#073746',
          display: 'browser',
          orientation: 'any',
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: true,
          },
        }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/pages/posts",
        name: "posts",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
          { resolve: "gatsby-remark-responsive-iframe" },
          { resolve: "gatsby-remark-prismjs" },
          { resolve: "gatsby-remark-copy-linked-files" },
          { resolve: "gatsby-remark-smartypants" },
        ],
      },
    },
  ],
}
