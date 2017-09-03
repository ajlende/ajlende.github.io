import styles from "./styles.module.sass"

import React from "react"
import { Container, Hero, HeroBody, Title } from "bloomer"
import Link from "gatsby-link"

const IndexPage = () => (
  <Hero isColor="info" isSize="large" isBold>
    <HeroBody>
      <Container hasTextAlign="centered">
        <Title className={styles.title}>Projects</Title>
      </Container>
    </HeroBody>
  </Hero>
)

export default IndexPage
