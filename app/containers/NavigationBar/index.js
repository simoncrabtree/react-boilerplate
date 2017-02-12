import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import styled from 'styled-components'

import SplashScreen from './SplashScreen'

const mapState = state => {
  return {
    router: state.router
  }
}

const mapDispatch = dispatch => {
  return {
    navigateTo: route => e => dispatch({type: 'ROUTER_PUSH', payload: route})
  }
}

const Logo = styled.span`
  cursor: pointer
`

const NavigationBar = ({ router, navigateTo }) =>
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand><Logo onClick={navigateTo('/home')}>cubdi</Logo></Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem onClick={navigateTo('/shopping')}>Shopping</NavItem>
          <NavItem onClick={navigateTo('/cupboard')}>Cupboard</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {router.route === '/' ? <SplashScreen /> : null}
  </div>

export default connect(mapState, mapDispatch)(NavigationBar)
