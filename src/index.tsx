import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ApolloProvider } from '@apollo/client'
import { graphqlClient } from './services/graphql.service'

import { AuthenticationProvider } from './components/Authentication'
import { initializeFirebase } from './services/firebase.service'

import { GlobalStyles } from './styles/GlobalStyles'
import LoadingScreen from './modules/LoadingScreen'

// * Setup
initializeFirebase()

interface AppSetup {
  children: React.ReactNode
}
const AppSetup = ({ children }: AppSetup) => {
  return (
    <React.StrictMode>
      <ApolloProvider client={graphqlClient}>
        <AuthenticationProvider>
          <React.Suspense fallback={<LoadingScreen />}>{children}</React.Suspense>
        </AuthenticationProvider>
      </ApolloProvider>
      <GlobalStyles />
    </React.StrictMode>
  )
}

// pre get the HTML node React DOM renders into
const rootElement = document.getElementById('root')

// render whole React app into chosen HTML DOM node, public/index.html
ReactDOM.render(
  <AppSetup>
    <App />
  </AppSetup>,
  rootElement
)

// Hot Module Replacement API
declare let module: { hot: any }
// enable HotModuleReload by Webpack, accepts all Routes as change params
// For more customization options, see: https://medium.com/superhighfives/hot-reloading-create-react-app-73297a00dcad
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <AppSetup>
        <NextApp />
      </AppSetup>,
      rootElement
    )
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
