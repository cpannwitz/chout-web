import React from 'react'

import styled from '@emotion/styled'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import { firebaseuiConfig } from '../logic/Firebase'
// import * as Firebase from 'firebase/app'

export const Authentication = () => {
  return (
    <Positioner>
      {/* <StyledFirebaseAuth uiConfig={firebaseuiConfig} firebaseAuth={Firebase.auth()} /> */}
    </Positioner>
  )
}

const Positioner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
