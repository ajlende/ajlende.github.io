import styles from "./styles.module.sass"

import React from "react"
import Link from "gatsby-link"
import { Container, Hero, HeroBody, Subtitle, Title } from "bloomer"

const NotFoundPage = () => (
  <Hero isColor="danger" isBold isSize="large">
    <HeroBody>
      <Container>
        <Title className={styles.title} isSpaced>
          NOT FOUND!
        </Title>
        <Subtitle className={styles.subtitle}>
          You just hit a route that doesn't exist... the sadness.<br />
          Better get back <Link to="/">home</Link>.
        </Subtitle>
      </Container>
    </HeroBody>
  </Hero>
)

export default NotFoundPage
