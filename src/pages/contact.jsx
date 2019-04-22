import React from "react"
import { Helmet } from "react-helmet"
import {
  Container,
  Hero,
  HeroBody,
  Title,
  Content,
  Columns,
  Column,
  Level,
  LevelItem,
} from "bloomer"

import Layout from "../components/Layout"
import Icon from "../components/Icon"

import resume from "../data/resume.json"

import styles from "./styles.module.sass"

const Professional = () => (
  <>
    <Title>Professional</Title>
    <Level isMobile>
      <LevelItem href="mailto:ajlende@gmail.com" title="Email">
        <Icon faProps={{ icon: "envelope", size: "3x" }} isSize="large" />
      </LevelItem>
      {resume.basics.profiles
        .filter(({ category }) => category === "professional")
        .map(({ icon, url, network }) => (
          <LevelItem href={url} title={network} key={network}>
            <Icon faProps={{ icon, size: "3x" }} isSize="large" />
          </LevelItem>
        ))}
    </Level>
  </>
)

/**
 * Chunk an array into equal segments
 * @param {Array} array Array to break up
 * @param {number} size Size of segments to break it up into
 */
const chunk = (array, size) => {
  const firstChunk = array.slice(0, size)
  if (!firstChunk.length) return array
  return [firstChunk].concat(chunk(array.slice(size, array.length), size))
}

const Personal = () => (
  <>
    <Title>Personal</Title>
    {chunk(resume.basics.profiles.filter(({ category }) => category === "personal"), 4).map(
      (row, index) => (
        <Level isMobile key={`personal-${index}`}>
          {row.map(({ icon, url, network }) => (
            <LevelItem href={url} title={network} key={network}>
              <Icon faProps={{ icon, size: "3x" }} isSize="large" />
            </LevelItem>
          ))}
        </Level>
      ),
    )}
  </>
)

const Prose = () => (
  <>
    <Title>Say Hi</Title>
    <Content>
      <p>
        Here is a nearly exhaustive list of all the places that you can add/
        <wbr />
        follow/
        <wbr />
        friend/
        <wbr />
        connect with me if you so desire. Social media is exhausting, and I try to focus my time on
        more productive things, so I don't spend much time on it. That being said, I'll also
        probably get an email notification if I get a DM on any of these, so still feel free to
        connect with me on any of them.
      </p>
      <p>
        Despite not spending much time on social media, I still check my email regularly if you
        really want to get in touch with me.{" "}
        <span role="img" aria-label="Victory Hand">
          ✌️
        </span>
      </p>
      <p>
        For anything not linked to here—including various Slack groups I'm a part of—look for
        @ajlende.
      </p>
    </Content>
  </>
)

const ContactPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet>
        <title>Contact – Alex Lende</title>
      </Helmet>
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
                <Professional />
                <Personal />
              </Column>
              <Column isOffset={1} isSize={4}>
                <Prose />
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      </Hero>
    </Layout>
  )
}

export default ContactPage
