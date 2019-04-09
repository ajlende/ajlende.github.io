const path = require("path")

const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions: { createPage } }) => {
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
