export default (state = {
  title: 'Hello Redux',
  shoppingListInputValue: '',
  items: []
}, action) => {
  switch (action.type) {
    case 'SHOPPINGLIST_INPUT_CHANGE':
      return {
        ...state,
        shoppingListInputValue: action.value
      }

    case 'SHOPPINGLIST_ITEM_ADD':
      return {
        ...state,
        items: [
          ...state.items,
          {name: state.shoppingListInputValue}
        ],
        shoppingListInputValue: ''
      }

    default:
      return state
  }
}
