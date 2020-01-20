require("dotenv").config({
  path: ".env.local",
})

module.exports = {
  siteMetadata: {
    title: "Alex Lende",
    siteUrl: "https://ajlende.com",
  },
  plugins: [
    { resolve: "gatsby-plugin-catch-links" },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
          logo: "./src/favicon.svg",
          dir: "ltr",
          lang: "en-US",
          background: "#073746",
          theme_color: "#073746",
          display: "browser",
          orientation: "any",
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
    { resolve: "gatsby-plugin-react-helmet" },
    { resolve: "gatsby-plugin-sass" },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 100,
      },
    },
    { resolve: "gatsby-plugin-sitemap" },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/images",
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: process.env.WPCOM_BASE_URL,
        protocol: process.env.WPCOM_PROTOCOL,
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientId: process.env.WPCOM_CLIENT_ID,
          wpcom_app_clientSecret: process.env.WPCOM_CLIENT_SECRET,
          wpcom_user: process.env.WPCOM_USER,
          wpcom_pass: process.env.WPCOM_PASS,
        }
      }
    },
    { resolve: "gatsby-transformer-sharp" },
  ],
}
