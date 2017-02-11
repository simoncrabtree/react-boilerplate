import React from 'react'
import { connect } from 'react-redux'
import { Link, RelativeFragment as Fragment } from 'redux-little-router'

const mapState = (state) => {
  console.log(state)
  return {
    pageTitle: state.title,
    shoppingListInputValue: state.shoppingList.inputValue,
    items: state.shoppingList.items
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
    <Fragment key='/' forRoute='/'>
      <Link href='/home'>Home</Link>
      <Link href='/shopping'>Shopping</Link>
      <Link href='/cupboard'>Cupboard</Link>
    </Fragment>
    <Fragment key='/home' forRoute='/home'>
      <p>Home</p>
    </Fragment>
    <Fragment key='/shopping' forRoute='/shopping'>
      <h1>Shopping List</h1>
      <form onSubmit={onSubmit}>
        <input 
          type='text'
          placeholder='Add item to list'
          value={shoppingListInputValue}
          onChange={onChange}
        />
      </form>
    <div>
      {items.map((item) => <div key={item.name}>{item.name}</div>)}
    </div>
    </Fragment>
    <Fragment key='/cupboard' forRoute='/cupboard'>
      <p>Cupboard</p>
    </Fragment>
  </div>

export default connect(mapState, mapActions)(AppPage)
