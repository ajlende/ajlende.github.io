import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Section, Content, Columns, Column, Title, Container } from "bloomer"

import Layout from "../components/Layout"

import styles from "../pages/styles.module.sass";

const BlogPostTemplate = ({ data: { wordpressPost: { title, content, featured_media } }, location }) => {
  // ImageSharp doesn't work on GIFs, and gatsby-image doesn't scale like I want it to, so the
  // featured image is done manually.
  let featuredImage = null
  if (featured_media && featured_media.localFile) {
    const { localFile } = featured_media;
    if (featured_media.localFile.childImageSharp) {
      const { fluid } = localFile.childImageSharp
      featuredImage = (
        <img
          src={fluid.src}
          alt={featured_media.alt_text}
          srcSet={fluid.srcSet}
          sizes={fluid.sizes}
          width={fluid.presentationWidth}
          height={fluid.presentationHeight}
        />
      );
    } else {
      featuredImage = (
        <img
          src={localFile.publicURL}
          alt={featured_media.alt_text}
          width={featured_media.media_details.width}
          height={featured_media.media_details.height}
        />
      );
    }
  }

  return (
    <Layout location={location}>
      <Section>
        <Helmet>
          <title>{title} – Alex Lende</title>
        </Helmet>
        <Container className={styles.featuredMedia}>
          {featuredImage}
        </Container>
        <Columns isCentered>
          <Column isSize={6}>
            <Title isSize={1}>{title}</Title>
            <Content dangerouslySetInnerHTML={{ __html: content }} />
          </Column>
        </Columns>
      </Section>
    </Layout>
  );
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      featured_media {
        alt_text
        mime_type
        media_details {
          width
          height
        }
        localFile {
          publicURL
          childImageSharp {
            fluid(quality: 100, maxWidth: 2400) {
              presentationWidth
              presentationHeight
              srcSet
              sizes
              src
            }
          }
        }
      }
      content
    }
  }
`
