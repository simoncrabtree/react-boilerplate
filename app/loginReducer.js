export default (state = {
  username: '',
  password: ''
}, action) => {
  switch (action.type) {
    case 'LOGIN_USERNAME_CHANGED':
      return {
        ...state,
        username: action.value
      }

    case 'LOGIN_PASSWORD_CHANGED':
      return {
        ...state,
        password: action.value
      }

    default:
      return state
  }
}
