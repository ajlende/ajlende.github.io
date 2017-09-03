import "./theme.sass"

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Navigation from "../components/Navigation"
import Copyright from "../components/Copyright"

const Layout = ({children, location}) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Alex Lende</title>
    </Helmet>
    <Navigation location={location} />
    {children()}
    <Copyright />
  </div>
)

Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.func,
}

export default Layout
