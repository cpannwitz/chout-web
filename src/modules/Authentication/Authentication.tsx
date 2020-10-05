import React from 'react'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { useAuth, useUser } from 'reactfire'

import { firebaseUIConfig } from '../../configs'

export function Authentication() {
  const auth = useAuth()
  const user = useUser(auth)
  const config = firebaseUIConfig({})

  const signOutUser = React.useCallback(() => {
    auth.signOut()
  }, [auth])

  if (user) {
    return <button onClick={signOutUser}>Logout</button>
  }
  return <StyledFirebaseAuth uiConfig={config} firebaseAuth={auth} />
}
