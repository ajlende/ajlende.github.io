import styles from "./styles.module.sass"

import React from "react"
import {Container, Hero, HeroBody, Subtitle, Title} from "bloomer"
import Link from "gatsby-link"

const IndexPage = () => (
  <Hero isColor="dark" isSize="large" isBold>
    <HeroBody>
      <Container hasTextAlign="centered">
        <Title className={styles.title} isSpaced>
          Alex Lende
        </Title>
        <Subtitle className={styles.subtitle}>Software Engineer</Subtitle>
      </Container>
    </HeroBody>
  </Hero>
)

export default IndexPage
