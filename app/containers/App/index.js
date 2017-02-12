import React from 'react'
import { connect } from 'react-redux'
import { Link, RelativeFragment as Fragment } from 'redux-little-router'
import NavigationBar from '../NavigationBar'
import ShoppingList from '../ShoppingList'
import Recipes from '../Recipes'

const mapState = (state) => state

const AppPage = ({ pageTitle }) =>
  <div>
    <Fragment key='/' forRoute='/'>
      <NavigationBar />
    </Fragment>
    <Fragment key='/home' forRoute='/home'>
      <p>Home</p>
    </Fragment>
    <Fragment key='/shopping' forRoute='/shopping'>
      <ShoppingList />
    </Fragment>
    <Fragment key='/cupboard' forRoute='/cupboard'>
      <p>Cupboard</p>
    </Fragment>
    <Fragment forRoute='/recipes/:recipe'>
      <Recipes />
    </Fragment>
  </div>

export default connect(mapState)(AppPage)
