import React from 'react'
import LoadIndicator from '../../components/LoadIndicator'

import styled from '@emotion/styled'

const Container = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#121519',
  color: '#ffffff'
})

export const LoadingScreen = () => {
  return (
    <Container>
      <LoadIndicator />
    </Container>
  )
}
