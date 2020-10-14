import React from 'react'
import firebase from 'firebase/app'
import { useValidateUserMutation } from '../../generated/graphql'
import { AuthenticationContext } from './AuthenticationContext'

interface AuthenticationProviderProps {
  children: React.ReactNode
}
export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const [validateUser] = useValidateUserMutation()

  React.useEffect(() => {
    setIsLoading(true)
    const unsubscribe = firebase.auth().onAuthStateChanged(
      async firebaseUser => {
        if (firebaseUser) {
          const idToken = await firebaseUser.getIdToken()
          await validateUser({
            context: { headers: { authorization: idToken ? `Bearer ${idToken}` : '' } }
          }).then(({ data }) => {
            if (data?.validateUser) {
              setIsAuthenticated(true)
            }
          })
        } else {
          setIsAuthenticated(false)
          firebase.auth().signOut()
        }
        setIsLoading(false)
      },
      error => {
        firebase.auth().signOut()
        setIsAuthenticated(false)
        setIsLoading(false)
        // TODO: add notification with message on auth error
      }
    )
    return () => unsubscribe() // unsubscribing from the listener when the component is unmounting.
  }, [validateUser])

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        isLoading: isLoading
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
