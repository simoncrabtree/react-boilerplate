import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import SplashScreen from './SplashScreen'

const mapState = state => {
  console.log(state)
  return {
    router: state.router
  }
}

const mapDispatch = dispatch => {
  return {
    navigateTo: route => e => dispatch({type: 'ROUTER_PUSH', payload: route})
  }
}

const NavigationBar = ({ router, navigateTo }) =>
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#' onClick={navigateTo('/home')}>cubdi</a>
        </Navbar.Brand>
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
