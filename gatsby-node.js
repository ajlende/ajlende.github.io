const path = require("path")

const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              date(formatString: "YYYY/MM/DD")
            }
          }
        }
      }
    `).then(({ data }) => {
      data.allWordpressPost.edges.map(({ node }) => {
        createPage({
          path: `${node.date}/${node.slug}`,
          component: path.resolve("./src/templates/post.jsx"),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            id: node.id,
          },
        })
      })
      resolve()
    })
  })
}
