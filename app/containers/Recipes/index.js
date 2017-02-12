/*
 *
 * Recipes
 *
 */

import React from 'react'
import { connect } from 'react-redux'

const Recipes = ({ title, recipe }) =>
  <div>
    <h1>{title} - {recipe}</h1>
  </div>

const mapState = state => {
  console.log(state.router)
  return {
    title: 'Recipes',
    recipe: state.router.params.recipe
  }
}

const mapDispatch = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapState, mapDispatch)(Recipes)
