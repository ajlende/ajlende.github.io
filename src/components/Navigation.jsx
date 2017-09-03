import React from "react"
import PropTypes from "prop-types"

import { navigateTo } from "gatsby-link"

import {
  Container,
  Icon,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
} from "bloomer"

const propTypes = {
  location: PropTypes.object,
}

const NavbarItemLink = ({ link, location, children }) => (
  <NavbarItem
    href="javascript:void(0)"
    onClick={() => navigateTo(link)}
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
      <Navbar>
        <Container>
          <NavbarBrand>
            <NavbarItemLink link="/" location={this.props.location}>
              <strong>Alex Lende</strong>
            </NavbarItemLink>
            <NavbarItem href="https://github.com/ajlende" isHidden="desktop">
              <Icon icon="github" />
            </NavbarItem>
            <NavbarItem href="https://linkedin.com/in/ajlende" isHidden="desktop">
              <Icon icon="linkedin" />
            </NavbarItem>
            <NavbarItem href="https://angel.co/ajlende" isHidden="desktop">
              <Icon icon="angellist" />
            </NavbarItem>
            <NavbarBurger isActive={this.state.isDropdownOpen} onClick={this.onClickDropdown} />
          </NavbarBrand>
          <NavbarMenu isActive={this.state.isDropdownOpen} onClick={this.onClickDropdown}>
            <NavbarStart>
              <NavbarItemLink link="/projects" location={this.props.location}>
                Projects
              </NavbarItemLink>
              <NavbarItemLink link="/experience" location={this.props.location}>
                Experience
              </NavbarItemLink>
              <NavbarItemLink link="/blog" location={this.props.location}>
                Blog
              </NavbarItemLink>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem href="https://github.com/ajlende" isHidden="touch">
                <Icon icon="github" />
              </NavbarItem>
              <NavbarItem href="https://linkedin.com/in/ajlende" isHidden="touch">
                <Icon icon="linkedin" />
              </NavbarItem>
              <NavbarItem href="https://angel.co/ajlende" isHidden="touch">
                <Icon icon="angellist" />
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
