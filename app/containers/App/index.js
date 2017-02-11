import React from 'react'
import { connect } from 'react-redux'
import { Link, RelativeFragment as Fragment } from 'redux-little-router'
import ShoppingList from '../ShoppingList'

const mapState = (state) => state

const AppPage = ({ pageTitle }) =>
  <div>
    <Fragment key='/' forRoute='/'>
      <Link href='/home'>Home</Link>
      <Link href='/shopping'>Shopping</Link>
      <Link href='/cupboard'>Cupboard</Link>
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
  </div>

export default connect(mapState)(AppPage)
