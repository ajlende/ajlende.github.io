import styles from "./styles.module.sass"

import React from "react"
import Helmet from "react-helmet"
import { Container, Hero, HeroBody, Title } from "bloomer"
import Link from "gatsby-link"

const IndexPage = () => (
  <div>
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
  </div>
)

export default IndexPage
