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
      return {
        ...state,
        items: [
          ...state.items,
          {name: state.inputValue}
        ],
        inputValue: ''
      }

    default:
      return state
  }
}
