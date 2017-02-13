import React from 'react'
import { connect } from 'react-redux'
import ShoppingListItemInput from './ShoppingListItemInput'
import ShoppingListItem from './ShoppingListItem'
import uuid from 'node-uuid'

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
    onSubmit: value => {
      dispatch({type: 'SHOPPINGLIST_ITEM_ADD', itemName: value, eid: uuid.v4()})
    },
    onDelete: value => e => dispatch({type: 'SHOPPINGLIST_ITEM_DELETE', itemName: value, eid: uuid.v4()})
  }
}

const ShoppingListPage = ({ shoppingListInputValue, items, isSaving, onChange, onSubmit, onDelete }) =>
  <div>
    <h1>Shopping List</h1>
    <ShoppingListItemInput value={shoppingListInputValue} isSaving={isSaving} onChange={onChange} onSubmit={onSubmit} />
    {items.map(item => <ShoppingListItem key={item.name} item={item} onDelete={onDelete(item.name)}/>)}
  </div>

export default connect(mapState, mapDispatch)(ShoppingListPage)
