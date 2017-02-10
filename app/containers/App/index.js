import React from 'react'
import { connect } from 'react-redux'

const mapState = (state) => {
  console.log(state)
  return {
    pageTitle: state.app.title,
    shoppingListInputValue: state.app.shoppingListInputValue
  }
}

const mapActions = (dispatch) => {
  return {
    onChange: e => dispatch({type: 'SHOPPINGLIST_INPUT_CHANGE', value: e.target.value })
  }
}

const AppPage = ({pageTitle, shoppingListInputValue, onChange}) =>
  <div>
    <h1>{pageTitle}</h1>
    <form>
      <input 
        type='text'
        placeholder='Add item to list'
        value={shoppingListInputValue}
        onChange={onChange}
      />
    </form>
  </div>

export default connect(mapState, mapActions)(AppPage)
