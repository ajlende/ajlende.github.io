import React from "react"
import { Helmet } from "react-helmet"
import {
  Section,
  Container,
  Hero,
  HeroBody,
  Title,
  Content,
  Level,
  LevelLeft,
  LevelRight,
} from "bloomer"
import { Link, graphql } from "gatsby"
import dateFormat from "dateformat"

import Layout from "../components/Layout"
import { CardGroup, Card } from "../components/CardGroup"

import styles from "./styles.module.sass"

const BlogPage = ({ data, location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Blog – Alex Lende</title>
    </Helmet>
    <Hero isColor="warning" isBold className={styles.angled}>
      <HeroBody>
        <Container hasTextAlign="centered">
          <Title className={styles.title}>Blog</Title>
        </Container>
      </HeroBody>
    </Hero>
    <Section>
      <Container>
        <CardGroup>
          {data.remark.posts
            .filter(post => post.path !== "/404/")
            .map(({ post }) => {
              const { timeToRead, id } = post
              const { title, description, date, slug } = post.frontmatter
              return (
                <Card key={id}>
                  <Title tag="h2">
                    <Link to={`${dateFormat(date, "UTC:yyyy/mm/dd")}/${slug}`}>{title}</Link>
                  </Title>
                  <Level tag="div" className={styles.level}>
                    <LevelLeft>{dateFormat(date, "UTC:mmm d, yyyy")}</LevelLeft>
                    <LevelRight>{timeToRead} min read</LevelRight>
                  </Level>
                  <Content>{description}</Content>
                </Card>
              )
            })}
        </CardGroup>
      </Container>
    </Section>
  </Layout>
)

export default BlogPage

export const pageQuery = graphql`
  {
    remark: allMarkdownRemark {
      posts: edges {
        post: node {
          id
          timeToRead
          excerpt
          frontmatter {
            title
            description
            slug
            date
          }
        }
      }
    }
  }
`
