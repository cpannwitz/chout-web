import React from 'react'

import styled from '@emotion/styled'

import logo from '../../assets/Chout-LogoLight.svg'
import subtext from '../../assets/subtext.svg'

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

const MainLogo = styled.img({
  width: '18rem',
  height: 'auto'
})
const SubLogo = styled.img({
  width: '14rem',
  margin: '4rem 0'
})

interface PreviewPlaceholderProps {
  children?: React.ReactNode
}
export const PreviewPlaceholder = ({ children }: PreviewPlaceholderProps) => {
  return (
    <Container>
      <MainLogo src={logo} alt='chout logo' />
      <SubLogo src={subtext} alt='sub logo' />
      {children}
    </Container>
  )
}
