import styles from "./styles.module.sass"

import React from "react"
import {
  Section,
  Container,
  Hero,
  HeroBody,
  Subtitle,
  Title,
  Tile,
  Content,
  Box,
  Level,
  LevelLeft,
  LevelRight,
} from "bloomer"
import Link from "gatsby-link"

import dateFormat from "dateformat"

const Articles = ({ rowSize, children }) => {
  const groupByRow = (acc, child, index, arr) => {
    if (index % rowSize) return acc
    return [...acc, arr.slice(index, index + rowSize)]
  }

  const toRows = row => <Tile key={row.reduce((a, e) => a + e.key, "")}>{row}</Tile>

  const rows = React.Children
    .toArray(children)
    .reduce(groupByRow, [])
    .map(toRows)

  return (
    <Tile isAncestor isVertical>
      {rows}
    </Tile>
  )
}

Articles.defaultProps = {
  rowSize: 2,
}

const Article = ({ children }) => (
  <Tile isParent isSize={6}>
    <Tile isChild render={() => <Box>{children}</Box>} />
  </Tile>
)

const IndexPage = ({ data }) => (
  <div>
    <Hero isColor="warning" isBold className={styles.angled}>
      <HeroBody>
        <Container hasTextAlign="centered">
          <Title className={styles.title}>Blog</Title>
        </Container>
      </HeroBody>
    </Hero>
    <Section>
      <Container>
        <Articles>
          {data.remark.posts.filter(post => post.path !== "/404/").map(({ post }) => {
            const { timeToRead, id } = post
            const { title, description, date, slug } = post.frontmatter
            return (
              <Article key={id}>
                <Title>
                  <Link to={`${dateFormat(date, "UTC:yyyy/mm/dd")}/${slug}`}>{title}</Link>
                </Title>
                <Level style={{ fontSize: "0.9em" }}>
                  <LevelLeft>{dateFormat(date, "UTC:mmm d, yyyy")}</LevelLeft>
                  <LevelRight>{timeToRead} min read</LevelRight>
                </Level>
                <Content>{description}</Content>
              </Article>
            )
          })}
        </Articles>
      </Container>
    </Section>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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
