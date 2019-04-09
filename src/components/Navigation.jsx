import React from "react"
import PropTypes from "prop-types"

import { navigate } from "gatsby"

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
  location: PropTypes.object,
}

const NavbarItemLink = ({ link, location, children }) => (
  <NavbarItem
    // eslint-disable-next-line no-script-url
    href="javascript:void(0)"
    onClick={() => navigate(link)}
    isActive={location.pathname === link}
  >
    {children}
  </NavbarItem>
)

class Navigation extends React.Component {
  state = { isDropdownOpen: false }

  onClickDropdown = () => {
    this.setState(state => ({ isDropdownOpen: !state.isDropdownOpen }))
  }

  render() {
    return (
      <Navbar aria-label="main navigation">
        <Container>
          <NavbarBrand>
            <NavbarItemLink link="/" location={this.props.location}>
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
              aria-expanded={this.state.isDropdownOpen}
              isActive={this.state.isDropdownOpen}
              onClick={this.onClickDropdown}
            />
          </NavbarBrand>
          <NavbarMenu isActive={this.state.isDropdownOpen} onClick={this.onClickDropdown}>
            <NavbarStart>
              <NavbarItemLink link="/projects" location={this.props.location}>
                Projects
              </NavbarItemLink>
              <NavbarItemLink link="/blog" location={this.props.location}>
                Blog
              </NavbarItemLink>
              <NavbarItemLink link="/contact" location={this.props.location}>
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
}

Navigation.propTypes = propTypes

export default Navigation
