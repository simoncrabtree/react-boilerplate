import React from 'react'
import { connect } from 'react-redux'
import ShoppingListItemInput from './ShoppingListItemInput'
import ShoppingListItem from './ShoppingListItem'

const mapState = (state) => {
  return {
    items: state.shoppingList.items,
    shoppingListInputValue: state.shoppingList.inputValue
  }
}

const mapDispatch = (dispatch) => {
  return {
    onChange: e => dispatch({type: 'SHOPPINGLIST_INPUT_CHANGE', value: e.target.value}),
    onSubmit: e => {
      e.preventDefault()
      dispatch({type: 'SHOPPINGLIST_ITEM_ADD'})
    }
  }
}

const ShoppingListPage = ({ shoppingListInputValue, items, onChange, onSubmit }) =>
<div>
  <h1>Shopping List</h1>
  <ShoppingListItemInput value={shoppingListInputValue} onChange={onChange} onSubmit={onSubmit} />
  {items.map(item => <ShoppingListItem key={item.name} item={item} />)}
</div>

export default connect(mapState, mapDispatch)(ShoppingListPage)