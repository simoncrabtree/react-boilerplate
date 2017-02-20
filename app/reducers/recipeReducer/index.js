export default (state = {
  pageContent: `React.createElement('div', null, 'Please wait...')`
}, action) => {
  switch (action.type) {
    case 'GET_RECIPE_PAGE':
      return {
        ...state,
        pageContent: `React.createElement('div', null, 'Loading...')`
      }

    case 'GET_RECIPE_PAGE_FAILED':
      return {
        ...state,
        pageContent: `React.createElement('div', null, 'Failed to get Content')`
      }

    case 'GET_RECIPE_PAGE_SUCCEEDED':
      return {
        ...state,
        pageContent: action.recipePage.page
      }

    default:
      return state
  }
}
