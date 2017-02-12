import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem} from 'react-bootstrap'

const mapState = state => state

const mapDispatch = dispatch => {
  return {
    navigateTo: route => e => dispatch({type: 'ROUTER_PUSH', payload: route})
  }
}

const NavigationBar = ({ navigateTo }) => 
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

export default connect(mapState, mapDispatch)(NavigationBar)