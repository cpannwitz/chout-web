import React from 'react'
import { Global, css } from '@emotion/core'

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}
    />
  )
}
