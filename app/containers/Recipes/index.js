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

function componentFactory (React) {
  var myComponent = eval(`
    function page (recipe) {
      return React.createElement('div', null, recipe)
    };
    page;
  `)
  return myComponent
}

class Recipes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pageToRender: () => React.createElement('div', null, 'Loading...')
    }
  }

  render () {
    return this.state.pageToRender(this.props.recipe)
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ pageToRender: componentFactory(React) })
    }, 2000)
  }
}

export default connect(mapState, mapDispatch)(Recipes)
