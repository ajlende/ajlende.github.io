import React from "react"
import { Helmet } from "react-helmet"
import { Section, Container, Hero, HeroBody, Title } from "bloomer"

import Layout from "../components/Layout"

import styles from "./styles.module.sass"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Projects – Alex Lende</title>
    </Helmet>
    <Hero isColor="info" isSize="large" isBold>
      <HeroBody>
        <Container hasTextAlign="centered">
          <Title className={styles.title}>Projects</Title>
        </Container>
      </HeroBody>
    </Hero>
    <Section>
      <Container>
        Coming Soon. For now, check out my <a href="https://github.com/ajlende">GitHub</a>.
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
