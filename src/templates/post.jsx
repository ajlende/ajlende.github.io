import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"
import { Section, Content, Columns, Column, Tag } from "bloomer"

const BlogPostTemplate = ({ data }) => {
  const tags = data.markdownRemark.frontmatter.tags || []
  const title = data.markdownRemark.frontmatter.title
  return (
    <Section>
      <Helmet>
        <title>{title} – Alex Lende</title>
      </Helmet>
      <Columns isCentered>
        <Column isSize={6}>
          <Content dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          {tags.map(tag => (
            <Link to={`/blog?tag=${tag}`}>
              <Tag isColor="light" isSize="medium">
                {tag}
              </Tag>
            </Link>
          ))}
        </Column>
      </Columns>
    </Section>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`
