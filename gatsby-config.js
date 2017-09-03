module.exports = {
  siteMetadata: {
    title: `Alex Lende`,
  },
  plugins: [
    {resolve: `gatsby-plugin-react-helmet`},
    {resolve: `gatsby-plugin-sass`},
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-105831475-1`,
      },
    },
  ],
}
