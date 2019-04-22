import React, { useEffect, useState } from "react"
import { request } from "graphql-request"
import { Helmet } from "react-helmet"
import {
  Container,
  Content,
  Hero,
  HeroBody,
  Level,
  LevelLeft,
  LevelRight,
  Section,
  Title,
} from "bloomer"

import Icon from "../components/Icon"
import Layout from "../components/Layout"
import { CardGroup, Card } from "../components/CardGroup"

import styles from "./styles.module.sass"

// Experiment representing a union type in JavaScript
// Inspired by http://blog.jenkster.com/2016/06/how-elm-slays-a-ui-antipattern.html
// and https://dev.to/avalander/union-types-with-javascript-4emo
const union = (...types) =>
  types.reduce(
    (rest, type) => ({
      ...rest,
      [type]: data => ({
        match: fns => fns[type](data),
      }),
    }),
    {},
  )

const RemoteData = union("NotAsked", "Loading", "Failure", "Success")

// TODO: Create skeleton screen https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a
const NotAsked = () => null

const Loading = () => (
  <div style={{ textAlign: "center", margin: "0 auto" }}>
    <Icon faProps={{ icon: "spinner", spin: true }} />
    <p>Loading pinned items.</p>
  </div>
)

const Failure = () => (
  <p>
    Failed to fetch repos. Check them out on <a href="https://github.com/ajlende">GitHub</a>{" "}
    instead.
  </p>
)

const Success = data => (
  <CardGroup>
    {data.user.pinnedItems.nodes.map(
      ({
        id,
        url,
        name,
        shortDescriptionHTML,
        stargazers: { totalCount: stars },
        ...node
      } = {}) => {
        const { color: backgroundColor, name: language } = node.primaryLanguage || {
          color: "#ccc",
          name: "Other",
        }
        return (
          <Card key={id}>
            <Title tag="h2">
              <a href={url}>{name}</a>
            </Title>
            <Content style={{ flex: "1 0 auto" }}>
              <div dangerouslySetInnerHTML={{ __html: shortDescriptionHTML }} />
            </Content>
            <Level tag="div" className={styles.level}>
              <LevelLeft>
                <span className={styles.dot} style={{ backgroundColor }} /> {language}
              </LevelLeft>
              <LevelRight>
                <Icon faProps={{ icon: "star" }} /> {stars}
              </LevelRight>
            </Level>
          </Card>
        )
      },
    )}
  </CardGroup>
)

const Prose = () => (
  <p>
    From time to time I get around to doing some coding outside of work. It gives me an opportunity
    to try out new ideas I've had, explore new languages, and occasionally contribute something
    useful to the community. Only my pinned repositories are listed here, but you can see the rest
    of my public code as far back as programming assignments from college on{" "}
    <a href="https://github.com/ajlende?tab=repositories">my repositories page on GitHub</a>.
  </p>
)

const endpoint = "https://ajlende-go-api-proxy.herokuapp.com/github/graphql"

const query = `
  query {
    user(login: "ajlende") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            url
            name
            shortDescriptionHTML
            primaryLanguage {
              name
              color
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`

const ProjectsPage = ({ location }) => {
  const [remoteData, setRemoteData] = useState(RemoteData.NotAsked())

  useEffect(() => {
    request(endpoint, query)
      .then(data => RemoteData.Success(data))
      .catch(error => RemoteData.Failure(error))
      .then(setRemoteData)

    // Don't show the loading indicator unless it takes a while (> 1s)
    const loadingDisplayDelay = setTimeout(
      () =>
        setRemoteData(prev =>
          prev.match({
            NotAsked: () => RemoteData.Loading(),
            // noop if we're not transitioning from NotAsked
            Loading: () => prev,
            Failure: () => prev,
            Success: () => prev,
          }),
        ),
      1000,
    )
    return () => clearTimeout(loadingDisplayDelay)
  }, [])

  return (
    <Layout location={location}>
      <Helmet>
        <title>Projects – Alex Lende</title>
      </Helmet>
      <Hero isColor="info" isBold className={styles.angled}>
        <HeroBody>
          <Container hasTextAlign="centered">
            <Title className={styles.title}>Projects</Title>
          </Container>
        </HeroBody>
      </Hero>
      <Section>
        <Container>
          <Prose />
        </Container>
      </Section>
      <Section>
        <Container>{remoteData.match({ NotAsked, Loading, Failure, Success })}</Container>
      </Section>
    </Layout>
  )
}

export default ProjectsPage
