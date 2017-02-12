/*
 *
 * Recipes
 *
 */

import React from 'react'
import { connect } from 'react-redux'

const Recipes = ({ title }) =>
  <div>
    <h1>{title}</h1>
  </div>

const mapState = state => {
  return {
    title: 'Recipes'
  }
}

const mapDispatch = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapState, mapDispatch)(Recipes)
