import React from "react"
import { graphql } from "gatsby"
import classnames from "classnames"
import {
  Container,
  Content,
  Hero,
  HeroBody,
  Subtitle,
  Title,
  Section,
  Columns,
  Column,
} from "bloomer"
import Img from "gatsby-image"

import StarField from "../components/StarField"
import Layout from "../components/Layout"

import Monogram from "../components/Monogram"

import styles from "./styles.module.sass"

const Prose = () => (
  <>
    <Title hasTextAlign="centered">Welcome!</Title>
    <Content>
      <p>
        I'm a Software Engineer for <a href="https://automattic.com">Automattic</a> where I tinker
        with various projects to explore and expand what can be done on the web on platforms like
        WordPress. You can find me most places on the internet as @ajlende.
      </p>
      <p>
        I love learning, and I think that's why the ever-changing landscape of frontend web
        development has been so appealing to me. I like to push the limits of what can be done in a
        web browser, from building virtual reality experiences with the WebXR API to generating
        music with the Web Audio API to exploring other programming languages that can compile and
        run on the web like Elm and Rust. I've given few talks at local meetups and a local
        conference to talk about some of the stuff that I like to do.{" "}
        <a href="https://github.com/ajlende/elm-webgl-presentation">WebGL in Elm</a> and{" "}
        <a href="https://github.com/ajlende/geospacial-data-talk">Geospacial Data Visualizations</a>{" "}
        both have the slides and speaker notes available on my{" "}
        <a href="https://github.com/ajlende">GitHub</a>.
      </p>
      <p>
        Outside of tech, I enjoy The Great Outdoors™, playing ukulele, and exploring the world. I
        achieved the rank of Eagle Scout while in the Boy Scouts of America, and still enjoy camping
        as often as I can.
      </p>
    </Content>
  </>
)

const Slide = ({ date, title, img, alt }) => (
  <div className={styles.imgGrp}>
    <Img fluid={img} alt={alt} />
    <div className={styles.imgInfo}>
      {title}
      <br />
      {date}
    </div>
  </div>
)

const ImageGrid = ({ data }) => (
  <div className={styles.imgGrid}>
    <Slide
      img={data.quetico.childImageSharp.fluid}
      date="September 2018"
      title="Quetico Provincial Park, Canada"
      alt="Alex carrying a canoe and Duluth pack through a forested portage area"
    />
    <Slide
      img={data.india.childImageSharp.fluid}
      date="September 2017"
      title="Dhamma Giri, India"
      alt="Alex standing in front of the golden pagoda"
    />
    <Slide
      img={data.ragbrai.childImageSharp.fluid}
      date="July 2017"
      title="Lansing, Iowa"
      alt="Alex holding his bike above his head in front of the river"
    />
    <Slide
      img={data.france.childImageSharp.fluid}
      date="June 2016"
      title="Longues-su-Mer, France"
      alt="Alex standing next to a World War II battery cannon in Normandy"
    />
  </div>
)

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <Hero isColor="dark" isFullHeight isBold className={classnames(styles.angled, styles.offset)}>
      <StarField />
      <HeroBody>
        <Container hasTextAlign="centered">
          <Monogram className={styles.monogram} />
          <Title className={styles.title} isSpaced hasTextAlign="centered">
            Alex Lende
          </Title>
          <Subtitle className={styles.subtitle}>Software Engineer</Subtitle>
        </Container>
      </HeroBody>
    </Hero>
    <Section>
      <Container>
        <Columns isCentered>
          <Column isSize={6}>
            <Prose />
            <ImageGrid data={data} />
          </Column>
        </Columns>
      </Container>
    </Section>
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1024) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const pageQuery = graphql`
  {
    quetico: file(relativePath: { eq: "alex-quetico.jpg" }) {
      ...fluidImage
    }
    france: file(relativePath: { eq: "alex-france.jpg" }) {
      ...fluidImage
    }
    india: file(relativePath: { eq: "alex-india.jpg" }) {
      ...fluidImage
    }
    ragbrai: file(relativePath: { eq: "alex-ragbrai.jpg" }) {
      ...fluidImage
    }
  }
`
