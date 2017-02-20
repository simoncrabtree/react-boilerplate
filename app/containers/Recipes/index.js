/*
 *
 * Recipes
 *
 */

import React from 'react'
import { connect } from 'react-redux'

const mapState = state => {
  return {
    title: 'Recipes',
    recipe: state.router.params.recipe,
    pageContent: state.recipe.pageContent
  }
}

const mapDispatch = dispatch => {
  dispatch({type: 'GET_RECIPE_PAGE'})
  return {
    dispatch
  }
}

function getComponentFromString (React, content) {
  return eval(`
    function page () {
      return ${content}
    }
    page
  `)
}

const Recipes = ({ title, recipe, pageContent }) => {
  const PageContentComponent = getComponentFromString(React, pageContent)

  return (
    <div>
      <h1>{title} - {recipe}</h1>
      <div>
        <PageContentComponent />
      </div>
    </div>
  )
}

export default connect(mapState, mapDispatch)(Recipes)
