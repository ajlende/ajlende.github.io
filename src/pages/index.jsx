import styles from "./styles.module.sass"
import symbols from "!file-loader!./symbols.svg"
import myPhoto from "./alex-ragbrai.jpg"

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
import Link from "gatsby-link"

import StarField from "../components/StarField"

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
                Lende (pronounced like lend-y). You can find me most places on the internet as{" "}
                <a href="https://github.com/ajlende">@ajlende</a>. I create 3D data visualizations
                with WebGL at <a href="https://www.cerner.com">Cerner</a> in Kansas City.
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
                Outside of tech, I enjoy The Great Outdoors™. I achieved the rank of Eagle Scout
                while in the Boy Scouts of America, and still enjoy camping as often as I can. I've
                been to the Boundary Waters Canoe Area Wilderness (<a href="http://bwca.com/index.cfm?">BWCA</a>)
                several times, and I did my first Des Moines Register's Annual Great Bike Ride
                Across Iowa (<a href="https://ragbrai.com/">RAGBRAI</a>) in July 2017.
              </p>
            </Content>
            <Image src={myPhoto} />
          </Column>
        </Columns>
      </Container>
    </Section>
  </div>
)

export default IndexPage
