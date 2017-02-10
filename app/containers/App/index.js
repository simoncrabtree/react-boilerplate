import React from 'react'
import { connect } from 'react-redux'

const mapState = (state) => {
  console.log(state)
  return {
    pageTitle: state.app.title,
    shoppingListInputValue: state.app.shoppingListInputValue,
    items: state.app.items
  }
}

const mapActions = (dispatch) => {
  return {
    onChange: e => dispatch({type: 'SHOPPINGLIST_INPUT_CHANGE', value: e.target.value }),
    onSubmit: e => {
      e.preventDefault()
      dispatch({type: 'SHOPPINGLIST_ITEM_ADD'})
    }
  }
}

const AppPage = ({pageTitle, shoppingListInputValue, items, onChange, onSubmit}) =>
  <div>
    <h1>{pageTitle}</h1>
    <form onSubmit={onSubmit}>
      <input 
        type='text'
        placeholder='Add item to list'
        value={shoppingListInputValue}
        onChange={onChange}
      />
    </form>
    <div>
      {items.map((item) => <div>{item.name}</div>)}
    </div>
  </div>

export default connect(mapState, mapActions)(AppPage)
