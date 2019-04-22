import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Section, Content, Columns, Column, Tag } from "bloomer"

import Layout from "../components/Layout"

const BlogPostTemplate = ({ data, location }) => {
  const title = data.markdownRemark.frontmatter.title
  return (
    <Layout location={location}>
      <Section>
        <Helmet>
          <title>{title} – Alex Lende</title>
        </Helmet>
        <Columns isCentered>
          <Column isSize={6}>
            <Content dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </Column>
        </Columns>
      </Section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
