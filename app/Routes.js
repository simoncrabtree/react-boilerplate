import React from 'react'
import { RelativeFragment as Fragment } from 'redux-little-router'
import NavigationBar from './containers/NavigationBar'
import ShoppingList from './containers/ShoppingList'
import Recipes from './containers/Recipes'

export const routes = {
  '/': {
  },
  '/home': {
    title: 'Home'
  },
  '/shopping': {
    title: 'Shopping List'
  },
  '/cupboard': {
    title: 'Cupboard'
  },
  '/recipes/:recipe': {
    title: 'Recipe'
  }
}

export default () =>
  <div>
    <Fragment forRoute='/'>
      <NavigationBar />
    </Fragment>
    <Fragment forRoute='/home'>
      <p>Home</p>
    </Fragment>
    <Fragment forRoute='/shopping'>
      <ShoppingList />
    </Fragment>
    <Fragment forRoute='/cupboard'>
      <p>Cupboard</p>
    </Fragment>
    <Fragment forRoute='/recipes/:recipe'>
      <Recipes />
    </Fragment>
  </div>
