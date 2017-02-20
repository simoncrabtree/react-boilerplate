export default (state = {
  isLoggedIn: false
}, action) => {
  switch (action.type) {
    case 'ROUTER_LOCATION_CHANGED':
      return state

    case 'USER_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: true
      }

    case 'USER_LOGGED_OUT':
      return {
        ...state,
        isLoggedIn: false
      }

    default:
      return state
  }
}
