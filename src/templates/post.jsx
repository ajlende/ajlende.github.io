import React from "react"
import Link from "gatsby-link"
import { Section, Content, Container, Columns, Column, Tag } from "bloomer"

const BlogPostTemplate = ({ data }) => {
  const tags = data.markdownRemark.frontmatter.tags || []
  return (
    <Section>
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
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`
