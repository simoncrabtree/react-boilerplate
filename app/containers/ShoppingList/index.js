import React from 'react'
import { connect } from 'react-redux'
import ShoppingListItemInput from './ShoppingListItemInput'
import ShoppingListItem from './ShoppingListItem'

const mapState = (state) => {
  return {
    items: state.shoppingList.items,
    shoppingListInputValue: state.shoppingList.inputValue,
    isSaving: state.shoppingList.isSaving
  }
}

const mapDispatch = (dispatch) => {
  return {
    onChange: e => dispatch({type: 'SHOPPINGLIST_INPUT_CHANGE', value: e.target.value}),
    onSubmit: e => {
      e.preventDefault()
      dispatch({type: 'SHOPPINGLIST_ITEM_ADD'})
    },
    saveShoppingList: e => dispatch({type: 'SHOPPINGLIST_SAVE'})
  }
}

const ShoppingListPage = ({ shoppingListInputValue, items, isSaving, onChange, onSubmit, saveShoppingList }) =>
<div>
  <h1>Shopping List</h1>
  <button onClick={saveShoppingList}>Save</button>
  <ShoppingListItemInput value={shoppingListInputValue} isSaving={isSaving} onChange={onChange} onSubmit={onSubmit} />
  {items.map(item => <ShoppingListItem key={item.name} item={item} />)}
</div>

export default connect(mapState, mapDispatch)(ShoppingListPage)