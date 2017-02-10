import React from 'react'
import { connect } from 'react-redux';

const mapState = (state) => {
  console.log(state)
  return {
    pageTitle: state.appTitle
  }
}

const AppPage = ({pageTitle}) => 
  <h1>{pageTitle}</h1>

export default connect(mapState)(AppPage)