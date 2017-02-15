export default (state = {
  inputValue: '',
  items: []
}, action) => {
  switch (action.type) {
    case 'SHOPPINGLIST_INPUT_CHANGE':
      return {
        ...state,
        inputValue: action.value
      }

    case 'SHOPPINGLIST_ITEM_ADD':
      if (state.items.some(item => item.name === action.itemName)) return state

      return {
        ...state,
        items: [
          ...state.items,
          {name: action.itemName}
        ],
        inputValue: ''
      }

    case 'SHOPPINGLIST_ITEM_DELETE':
      return {
        ...state,
        items: [
          ...state.items.filter(item => item.name !== action.itemName)
        ]
      }

    default:
      return state
  }
}
