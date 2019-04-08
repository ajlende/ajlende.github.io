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
    <Title hasTextAlign="centered">Hello!</Title>
    <Content>
      <p>
        As you probably guessed by the large title at the top of this page, my name is Alex Lende.
        You can find me most places on the internet as{" "}
        <a href="https://github.com/ajlende">@ajlende</a>. My primary gig is creating 3D data
        visualizations with WebGL for <a href="https://www.cerner.com">Cerner</a> in Kansas City.
      </p>
      <p>
        Most of the time you'll find me writing JavaScript in whatever the current trendy framework
        is (or a new ones that I want to learn about)—this means{" "}
        <a href="https://facebook.github.io/react/">React</a> for now, but{" "}
        <a href="http://elm-lang.org/">Elm</a> is looking like a promising candidate for the future
        (and it's not even JS{" "}
        <span role="img" aria-label="Face Screaming In Fear">
          😱
        </span>
        ). I also spend a good deal of time thinking about design and human-computer interaction
        including everything from brand design to user interface design to game design to
        programming language design—I've been known to design the occasional website or logo for
        someone.
      </p>
      <p>
        Outside of tech, I enjoy The Great Outdoors™ and all sorts of adventures. I achieved the
        rank of Eagle Scout while in the Boy Scouts of America, and still enjoy camping as often as
        I can. My most recent larger adventures have been{" "}
        <a href="http://www.iowastatedaily.com/ames247/article_c384cfa8-2be5-11e6-bb4e-87b03dd281f6.html">
          performing in France
        </a>{" "}
        for D-Day memorial ceremonies, my first Des Moines Register's Annual Great Bike Ride Across
        Iowa (<a href="https://ragbrai.com/">RAGBRAI</a>), a 10-day canoeing trip in Ontario's{" "}
        <a href="https://en.wikipedia.org/wiki/Quetico_Provincial_Park">Quetico Provincial Park </a>
        , and a 10-day Vipassana meditation course in{" "}
        <a href="http://www.giri.dhamma.org/">Dhamma Giri, India</a>.
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
