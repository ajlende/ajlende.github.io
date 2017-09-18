import styles from "./styles.module.sass"
import symbols from "!file-loader!./symbols.svg"

import React from "react"
import {
  Container,
  Hero,
  HeroBody,
  Title,
  Section,
  Icon,
  Content,
  Columns,
  Column,
  Level,
  LevelItem,
} from "bloomer"
import Link from "gatsby-link"

const IndexPage = () => (
  <div>
    <Hero isColor="success" isBold className={styles.angled}>
      <HeroBody>
        <Container hasTextAlign="centered">
          <Title className={styles.title}>Contact</Title>
        </Container>
      </HeroBody>
    </Hero>
    <Hero isSize="medium">
      <HeroBody>
        <Container>
          <Columns isCentered>
            <Column isSize={4}>
              <Title>Professional</Title>
              <Level isMobile>
                <LevelItem href="mailto:ajlende@gmail.com">
                  <Icon icon="envelope" className="fa-3x" isSize="large" />
                </LevelItem>
                <LevelItem href="https://github.com/ajlende">
                  <Icon icon="github" className="fa-3x" isSize="large" />
                </LevelItem>
                <LevelItem href="https://linkedin.com/in/ajlende">
                  <Icon icon="linkedin" className="fa-3x" isSize="large" />
                </LevelItem>
                <LevelItem href="https://angel.co/ajlende">
                  <Icon icon="angellist" className="fa-3x" isSize="large" />
                </LevelItem>
              </Level>
              <Title>Personal</Title>
              <Level isMobile>
                <LevelItem href="https://www.facebook.com/ajlende">
                  <Icon icon="facebook" className="fa-3x" isSize="large" />
                </LevelItem>
                <LevelItem href="https://www.snapchat.com/add/ajlende">
                  <Icon icon="snapchat-ghost" className="fa-3x" isSize="large" />
                </LevelItem>
                <LevelItem href="https://twitter.com/ajlende">
                  <Icon icon="twitter" className="fa-3x" isSize="large" />
                </LevelItem>
                <LevelItem href="https://www.instagram.com/ajlende/">
                  <Icon icon="instagram" className="fa-3x" isSize="large" />
                </LevelItem>
              </Level>
              <Level isMobile>
                <LevelItem href="https://plus.google.com/+AlexLende">
                  <Icon icon="google-plus" className="fa-3x" isSize="large" />
                </LevelItem>
                <LevelItem href="https://www.meetup.com/members/218214467/">
                  <Icon icon="meetup" className="fa-3x" isSize="large" />
                </LevelItem>
                <LevelItem href="https://getpocket.com/@ajlende">
                  <Icon icon="get-pocket" className="fa-3x" isSize="large" />
                </LevelItem>
                <LevelItem href="https://medium.com/@ajlende">
                  <Icon icon="medium" className="fa-3x" isSize="large" />
                </LevelItem>
              </Level>
              <Level isMobile>
                <LevelItem href="https://www.pinterest.com/ajlende/">
                  <Icon icon="pinterest" className="fa-3x" isSize="large" />
                </LevelItem>
                <LevelItem href="https://www.reddit.com/user/ajlende">
                  <Icon icon="reddit" className="fa-3x" isSize="large" />
                </LevelItem>
                <LevelItem href="https://steamcommunity.com/id/ajlende/">
                  <Icon icon="steam-square" className="fa-3x" isSize="large" />
                </LevelItem>
                <LevelItem href="https://www.strava.com/athletes/19753792">
                  <Icon isSize="large">
                    <svg className={styles.link}>
                      <use href={`${symbols}#strava`} />
                    </svg>
                  </Icon>
                </LevelItem>
              </Level>
              <Level isMobile>
                <LevelItem href="https://8tracks.com/ajlende">
                  <Icon isSize="large">
                    <svg className={styles.link}>
                      <use href={`${symbols}#8tracks`} />
                    </svg>
                  </Icon>
                </LevelItem>
                <LevelItem href="https://www.last.fm/user/lendea">
                  <Icon icon="lastfm" className="fa-3x" isSize="large" />
                </LevelItem>
                <LevelItem href="https://open.spotify.com/user/ajlende">
                  <Icon icon="spotify" className="fa-3x" isSize="large" />
                </LevelItem>
                <LevelItem href="https://soundcloud.com/alex-lende">
                  <Icon icon="soundcloud" className="fa-3x" isSize="large" />
                </LevelItem>
              </Level>
            </Column>
            <Column isOffset={1} isSize={4}>
              <Title>Say Hi</Title>
              <Content>
                <p>
                  Here is a nearly exhaustive list of all the places that you can add/<wbr />follow/<wbr />friend/<wbr />connect
                  with me if you so desire. Social media is exhausting, and I try to focus my time
                  on more productive things, so I don't spend much time on it. That being said, I'll
                  also probably get an email notification if I get a DM on any of these, so still
                  feel free to connect with me on any of them.
                </p>
                <p>
                  Despite not spending much time on social media, I still check my email regularly
                  if you really want to get in touch with me. ✌️
                </p>
                <p>
                  For anything not linked to here—including various Slack groups I'm a part of—look
                  for @ajlende.
                </p>
              </Content>
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>
  </div>
)

export default IndexPage
