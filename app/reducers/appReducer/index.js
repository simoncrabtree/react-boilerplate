export default (state = {
  isLoggedIn: false
}, action) => {
  switch (action.type) {
    case 'LOCATION_CHANGED':
      console.log('LOCATION_CHANGED', action)
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
