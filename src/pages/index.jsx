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
        I'm a Senior Software Engineer, creating 3D data visualizations with WebGL, composing
        data-driven soundtracks with the Web Audio API, and exploring the future of health and care
        by prototyping out smaller projects for <a href="https://www.cerner.com">Cerner</a> in
        Kansas City. You can find me most places on the internet as @ajlende.
      </p>
      <p>
        I love learning, and I think that's why the ever-changing landscape of frontend web
        development has been so appealing to me. But learning isn't any good unless you share your
        knowledge with others—I've given few talks at local meetups and a local conference to share
        some of my knowledge.{" "}
        <a href="https://github.com/ajlende/elm-webgl-presentation">WebGL in Elm</a> and{" "}
        <a href="https://github.com/ajlende/geospacial-data-talk">Geospacial Data Visualizations</a>{" "}
        both have the slides and speaker notes available on my{" "}
        <a href="https://github.com/ajlende">GitHub</a>.
      </p>
      <p>
        Outside of tech, I enjoy The Great Outdoors™, playing ukulele, and exploring the world. I
        achieved the rank of Eagle Scout while in the Boy Scouts of America, and still enjoy camping
        as often as I can. My more memorable adventures have been{" "}
        <a href="http://www.iowastatedaily.com/ames247/article_c384cfa8-2be5-11e6-bb4e-87b03dd281f6.html">
          performing in France
        </a>{" "}
        for D-Day memorial ceremonies, the{" "}
        <a href="https://ragbrai.com/">Des Moines Register's Annual Great Bike Ride Across Iowa</a>{" "}
        (RAGBRAI), a 10-day Vipassana meditation course in{" "}
        <a href="http://www.giri.dhamma.org/">Dhamma Giri, India</a>, and a 10-day canoeing trip in
        Ontario's beautiful{" "}
        <a href="https://en.wikipedia.org/wiki/Quetico_Provincial_Park">Quetico Provincial Park</a>.
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
      title="Quetico Provinial Park, Canada"
      alt="Alex carrying a canoe and Duluth pack through a forrested portage area"
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
