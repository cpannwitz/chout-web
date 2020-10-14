import React from 'react'
export interface AuthenticationContextType {
  isAuthenticated: boolean
  isLoading: boolean
}

export const AuthenticationContext = React.createContext<AuthenticationContextType>(null as any)
