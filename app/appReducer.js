export default (state = {
  title: 'Hello Redux'
}, action) => {
  switch (action.type) {
    case 'LOCATION_CHANGED':
      console.log('LOCATION_CHANGED', action)
      return state
    default:
      return state
  }
}
