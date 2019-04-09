import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
} from "bloomer"

import Icon from "../components/Icon"

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

const NavbarItemLink = ({ to, location, children }) => (
  <NavbarItem tag={Link} to={to} isActive={location.pathname === to}>
    {children}
  </NavbarItem>
)

const Navigation = ({ location }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const onClickDropdown = useCallback(() => {
    setDropdownOpen(prevState => !prevState)
  }, [])

  return (
    <Navbar aria-label="main navigation">
      <Container>
        <NavbarBrand>
          <NavbarItemLink to="/" location={location}>
            <strong>Alex Lende</strong>
          </NavbarItemLink>
          <NavbarItem aria-label="GitHub" href="https://github.com/ajlende" isHidden="desktop">
            <Icon faProps={{ icon: ["fab", "github"], size: "lg" }} isSize="medium" />
          </NavbarItem>
          <NavbarItem
            aria-label="LinkedIn"
            href="https://linkedin.com/in/ajlende"
            isHidden="desktop"
          >
            <Icon faProps={{ icon: ["fab", "linkedin"], size: "lg" }} isSize="medium" />
          </NavbarItem>
          <NavbarItem aria-label="AngelList" href="https://angel.co/ajlende" isHidden="desktop">
            <Icon faProps={{ icon: ["fab", "angellist"], size: "lg" }} isSize="medium" />
          </NavbarItem>
          <NavbarBurger
            // Override for accessibility. Unfortunately this requires a script url in href.
            tag="a"
            href="javascript:void(0)" // eslint-disable-line no-script-url
            role="button"
            aria-label="menu"
            aria-expanded={isDropdownOpen}
            isActive={isDropdownOpen}
            onClick={onClickDropdown}
          />
        </NavbarBrand>
        <NavbarMenu isActive={isDropdownOpen} onClick={onClickDropdown}>
          <NavbarStart>
            <NavbarItemLink to="/projects" location={location}>
              Projects
            </NavbarItemLink>
            <NavbarItemLink to="/blog" location={location}>
              Blog
            </NavbarItemLink>
            <NavbarItemLink to="/contact" location={location}>
              Contact
            </NavbarItemLink>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem aria-label="GitHub" href="https://github.com/ajlende" isHidden="touch">
              <Icon faProps={{ icon: ["fab", "github"], size: "lg" }} isSize="medium" />
            </NavbarItem>
            <NavbarItem
              aria-label="LinkedIn"
              href="https://linkedin.com/in/ajlende"
              isHidden="touch"
            >
              <Icon faProps={{ icon: ["fab", "linkedin"], size: "lg" }} isSize="medium" />
            </NavbarItem>
            <NavbarItem aria-label="AngelList" href="https://angel.co/ajlende" isHidden="touch">
              <Icon faProps={{ icon: ["fab", "angellist"], size: "lg" }} isSize="medium" />
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Container>
    </Navbar>
  )
}

Navigation.propTypes = propTypes

export default Navigation
