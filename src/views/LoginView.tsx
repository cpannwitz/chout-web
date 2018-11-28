import React from 'react'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Login from '../modules/Login'

const LoginView = () => {
  return (
    <ErrorBoundary>
      <Login />
    </ErrorBoundary>
  )
}
// LoginView.propTypes = {}
// LoginView.defaultProps = {}

export default LoginView
