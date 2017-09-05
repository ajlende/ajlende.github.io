module.exports = {
  siteMetadata: {
    title: "Alex Lende",
  },
  plugins: [
    { resolve: "gatsby-plugin-catch-links" },
    { resolve: "gatsby-plugin-react-helmet" },
    {
      resolve: "gatsby-plugin-postcss-sass",
      options: {
        postCssPlugins: [require("autoprefixer")()],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-105831475-1",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/posts`,
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
