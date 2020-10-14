import React from 'react'
import firebase from 'firebase/app'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { firebaseUIConfig } from '../../configs/firebaseUI.config'

import { useAuthenticationContext } from '../../components/Authentication'
import LoadIndicator from '../../components/LoadIndicator'

export function Authentication() {
  const auth = useAuthenticationContext()
  const config = firebaseUIConfig({})
  const fbauth = firebase.auth()

  const signOutUser = React.useCallback(() => {
    fbauth.signOut()
  }, [fbauth])

  if (auth.isLoading) {
    return <LoadIndicator />
  }
  if (auth.isAuthenticated) {
    return <button onClick={signOutUser}>Logout</button>
  }
  return <StyledFirebaseAuth uiConfig={config} firebaseAuth={fbauth} />
}
