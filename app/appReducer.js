export default (state = {
  title: 'Hello Redux',
  shoppingListInputValue: ''
}, action) => {
  switch (action.type) {
    case 'SHOPPINGLIST_INPUT_CHANGE':
      console.log(action)
      return {
        ...state,
        shoppingListInputValue: action.value
      }

    default:
      return state
  }
}
