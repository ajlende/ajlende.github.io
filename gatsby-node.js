exports.createPages = ({ actions: { createRedirect } }) => {
  createRedirect({ fromPath: "/blog", toPath: "https://ajlende.blog", isPermanent: true })
}
