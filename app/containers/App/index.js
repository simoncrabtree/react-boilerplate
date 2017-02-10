import React from 'react'
import { connect } from 'react-redux';

const mstp = (state) => {
  console.log(state)
  return {
    pageTitle: state.appTitle
  }
}

export default connect(mstp)(({pageTitle}) => 
  <h1>{pageTitle}</h1>
)