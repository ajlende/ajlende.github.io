import "../styles/theme.sass"

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Navigation from "../components/Navigation"
import Copyright from "../components/Copyright"

const Layout = ({ children, location }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/manifest.json" />
      {/* TODO: Generate safari-pinned-tab */}
      {/* <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#073746" /> */}
      <meta name="apple-mobile-web-app-title" content="Alex Lende" />
      <meta name="application-name" content="Alex Lende" />
      <meta name="theme-color" content="#073746" />
      <title>Alex Lende</title>
      <meta name="p:domain_verify" content="b94c9d9f144c41daa7b4aac64aeef4b6" />
    </Helmet>
    <Navigation location={location} />
    <main>{children()}</main>
    <Copyright />
  </div>
)

Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.func,
}

export default Layout
