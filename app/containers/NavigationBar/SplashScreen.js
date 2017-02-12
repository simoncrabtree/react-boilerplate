import React from 'react'
import styled from 'styled-components'
import { Link } from 'redux-little-router'

const SplashScreen = styled.div`
  text-align: center
`

export default () =>
  <SplashScreen>
    <h1>
      Welcome!
    </h1>
    <p>
      Sign In or Sign Up
    </p>
    <Link href='/cupboard'>Jump to Cupboard</Link>
  </SplashScreen>
