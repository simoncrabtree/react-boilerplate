/*
 *
 * Recipes
 *
 */

import React from 'react'
import { connect } from 'react-redux'

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

class Recipes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pageToRender: null
    }
  }

  render () {
    if (!this.state.pageToRender) {
      return (
        <div>Loading...</div>
      )
    }

    return this.state.pageToRender(this.props.recipe)
  }

  componentDidMount () {
    console.log('Getting Component')
    setTimeout(() => {
      console.log('Got Component')
      let page = null
      try {
        page = require(`./${this.props.recipe}`)
      } catch (err) {
        page = (recipe) => React.createElement('h1', null, `Recipe ${recipe} not found`)
      }

      this.setState({pageToRender: page})
    }, 2000)
  }
}

export default connect(mapState, mapDispatch)(Recipes)
