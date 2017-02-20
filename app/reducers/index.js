import { combineReducers } from 'redux'
import app from './appReducer'
import login from './loginReducer'
import shoppingList from './shoppingListReducer'
import recipe from './recipeReducer'

export default combineReducers({
  app,
  login,
  shoppingList,
  recipe
})
