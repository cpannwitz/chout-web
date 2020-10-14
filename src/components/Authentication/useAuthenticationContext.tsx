import React from 'react'
import { AuthenticationContext } from './AuthenticationContext'

export const useAuthenticationContext = () => React.useContext(AuthenticationContext)
