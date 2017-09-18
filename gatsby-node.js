const path = require("path")

const webpack = require("webpack")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")

const { createFilePath } = require("gatsby-source-filesystem")

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "develop-html":
    case "build-html":
      config.plugin("favicons", FaviconsWebpackPlugin, [
        {
          logo: "./src/favicon.svg",
          prefix: "favicons/",
          title: "Alex Lende",
          background: "#073746",
          inject: false,
          emitStats: true,
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
        },
      ])
      break
  }
  return config
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
                date(formatString: "YYYY/MM/DD")
              }
            }
          }
        }
      }
    `).then(({ data }) => {
      data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
          path: `${node.frontmatter.date}/${node.frontmatter.slug}`,
          component: path.resolve("./src/templates/post.jsx"),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.frontmatter.slug,
          },
        })
      })
      resolve()
    })
  })
}
