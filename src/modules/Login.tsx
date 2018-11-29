import React from 'react'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { firebaseuiConfig } from '../logic/Firebase'
import * as Firebase from 'firebase/app'

const Login = () => {
  return (
    <ErrorBoundary>
      <Positioner>
        <StyledFirebaseAuth uiConfig={firebaseuiConfig} firebaseAuth={Firebase.auth()} />
      </Positioner>
    </ErrorBoundary>
  )
}

// Login.propTypes = {}
// Login.defaultProps = {}

export default Login

const Positioner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
