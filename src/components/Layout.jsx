import "../styles/theme.sass"

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Navigation from "./Navigation"
import Copyright from "./Copyright"

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fac } from "./fa-custom-svg-icons"

// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

// Make the icons available by their string names
library.add(fas, fab, fac)

console.log(
  `If you're looking at the console for my site, either something's broken or you're interested in learning how it was built. For the former, log an issue at https://github.com/ajlende/ajlende.github.io/issues. For the later, check out the source code which I've made available at https://github.com/ajlende/ajlende.github.io.`,
)

const Layout = ({ children, location }) => (
  <>
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
    <main>{children}</main>
    <Copyright />
  </>
)

Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.node,
}

export default Layout
