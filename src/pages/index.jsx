import styles from "./styles.module.sass"
import symbols from "!file-loader!./symbols.svg"

import india from "./alex-india.jpg"
import ragbrai from "./alex-ragbrai.jpg"
import bwca from "./alex-bwca.jpg"
import france from "./alex-france.jpg"

import React from "react"
import classnames from "classnames"
import {
  Container,
  Content,
  Hero,
  HeroBody,
  Subtitle,
  Title,
  Section,
  Image,
  Columns,
  Column,
} from "bloomer"

import StarField from "../components/StarField"

const Slide = ({ date, title, img, alt }) => (
  <div className={styles.imgGrp}>
    <img src={img} alt={alt} />
    <div className={styles.imgInfo}>{title}<br />{date}</div>
  </div>
)

const IndexPage = () => (
  <div>
    <Hero isColor="dark" isFullHeight isBold className={classnames(styles.angled, styles.offset)}>
      <StarField />
      <HeroBody>
        <Container hasTextAlign="centered">
          <svg className={styles.monogram}>
            <use href={`${symbols}#monogram`} />
          </svg>
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
            <Title hasTextAlign="centered">Hello!</Title>
            <Content>
              <p>
                As you probably guessed by the large title at the top of this page, my name is Alex
                Lende. You can find me most places on the internet as{" "}
                <a href="https://github.com/ajlende">@ajlende</a>. My primary gig is creating 3D
                data visualizations with WebGL for <a href="https://www.cerner.com">Cerner</a> in
                Kansas City.
              </p>
              <p>
                Most of the time you'll find me writing JavaScript in whatever the current trendy
                framework is (or a new ones that I want to learn about)—this means{" "}
                <a href="https://facebook.github.io/react/">React</a> for now, but{" "}
                <a href="http://elm-lang.org/">Elm</a> is looking like a promising candidate for the
                future (and it's not even JS 😱). I also spend a good deal of time thinking about
                design and human-computer interaction including everything from brand design to user
                interface design to game design to programming language design—I've been known to
                design the occasional website or logo for someone.
              </p>
              <p>
                Outside of tech, I enjoy The Great Outdoors™ and all sorts of adventures. I achieved
                the rank of Eagle Scout while in the Boy Scouts of America, and still enjoy camping
                as often as I can. My most recent adventures have been{" "}
                <a href="http://www.iowastatedaily.com/ames247/article_c384cfa8-2be5-11e6-bb4e-87b03dd281f6.html">
                  performing in France
                </a>{" "}
                for D-Day memorial ceremonies, a 10-day canoeing trip in the Boundary Waters Canoe
                Area Wilderness (<a href="http://bwca.com/index.cfm?">BWCA</a>), my first Des Moines
                Register's Annual Great Bike Ride Across Iowa (<a href="https://ragbrai.com/">
                  RAGBRAI
                </a>), and a 10-day Vipassana meditation course in{" "}
                <a href="http://www.giri.dhamma.org/">Dhamma Giri, India</a>.
              </p>
            </Content>
            <div className={styles.imgGrid}>
              <Slide
                img={india}
                date="September 2017"
                title="Dhamma Giri, India"
                alt="Alex standing in front of the golden pagoda at Dhamma Giri"
              />
              <Slide
                img={ragbrai}
                date="July 2017"
                title="Lansing, Iowa"
                alt="Alex holding his bike above his head after the completion of RAGBRAI"
              />
              <Slide
                img={bwca}
                date="July 2016"
                title="Ely, Minnesota"
                alt="Alex in the middle of five friends standing ankle-deep in the water of a Boundary Waters entry point"
              />
              <Slide
                img={france}
                date="June 2016"
                title="Longues-su-Mer, France"
                alt="Alex standing next to a World War II battery cannon on the coast of Normandy"
              />
            </div>
          </Column>
        </Columns>
      </Container>
    </Section>
  </div>
)

export default IndexPage
