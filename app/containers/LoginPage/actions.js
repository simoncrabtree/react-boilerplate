export function usernameChanged (username) {
  return {
    type: 'LOGIN_USERNAME_CHANGED',
    value: username
  }
}

export function passwordChanged (password) {
  return {
    type: 'LOGIN_PASSWORD_CHANGED',
    value: password
  }
}

export function login (username, password) {
  return {
    type: 'LOGIN',
    username: password,
    password: password
  }
}
