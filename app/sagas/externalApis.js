/* global fetch, localStorage */
export function* doPost (payload) {
  return fetch('http://localhost:5000/shoppinglist', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}

export function localStorageSetItem (key, value) {
  localStorage.setItem(key, value)
}

export function localStorageGetItem (key) {
  return localStorage[key]
}

export function localStorageRemoveItem (key) {
  localStorage.removeItem(key)
}
