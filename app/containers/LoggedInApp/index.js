import React from 'react'
import { RelativeFragment as Fragment } from 'redux-little-router'
import NavigationBar from '../NavigationBar'
import ShoppingList from '../ShoppingList'
import Recipes from '../Recipes'
import { connect } from 'react-redux'

const LoggedInApp = () =>
  <div>
    <Fragment forRoute='/'>
      <NavigationBar />
    </Fragment>
    <div className='container-fluid'>
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
  </div>

const mapState = state => state

export default connect(mapState)(LoggedInApp)
