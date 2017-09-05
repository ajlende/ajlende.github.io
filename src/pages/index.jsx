import styles from "./styles.module.sass"

import React from "react"
import classnames from "classnames"
import { Container, Content, Hero, HeroBody, Subtitle, Title, Section } from "bloomer"
import Link from "gatsby-link"

import StarField from "../components/StarField"

const IndexPage = () => (
  <div>
    <Hero isColor="dark" isFullHeight isBold className={classnames(styles.angled, styles.offset)}>
      <StarField />
      <HeroBody>
        <Container hasTextAlign="centered">
          <Title className={styles.title} isSpaced>
            Alex Lende
          </Title>
          <Subtitle className={styles.subtitle}>Software Engineer</Subtitle>
        </Container>
      </HeroBody>
    </Hero>
    <Section>
      <Container hasTextAlign="centered">
        <Title>A Little about me...</Title>
      </Container>
    </Section>
  </div>
)

export default IndexPage
