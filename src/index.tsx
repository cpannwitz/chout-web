import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

// STYLE INITIALIZATION
import { MuiThemeProvider } from '@material-ui/core/styles'
import { muiTheme } from './styles/muiTheme'
import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalStyles from './styles/globalStyles'

// ERROR LOGGER INITIALIZATION
import ErrorLogger from './logic/ErrorLogger'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

if (process.env.NODE_ENV === 'production') {
  ErrorLogger.initializeLogger()
}

// FIREBASE INITIALIZATION
import { FirebaseProvider, initializeFirebase } from './logic/Firebase'
const fb = initializeFirebase()

// REDUX INITIALIZATION
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/storeConfig'
export const reduxStore = store()

import App from './App'

// our Appbase with redux and style provider, also contains notification system base
const AppBase: React.SFC = ({ children }) => {
  return (
    <ReduxProvider store={reduxStore}>
      <FirebaseProvider firebase={fb}>
        <MuiThemeProvider theme={muiTheme}>
          <CssBaseline />
          <GlobalStyles />
          <ErrorBoundary>{children}</ErrorBoundary>
        </MuiThemeProvider>
      </FirebaseProvider>
    </ReduxProvider>
  )
}

// pre get the HTML node React DOM renders into
let entry = document.getElementById('root')

// render whole React app into chosen HTML DOM node, public/index.html
ReactDOM.render(
  <AppBase>
    <App />
  </AppBase>,
  entry
)

// Hot Module Replacement API
declare let module: { hot: any }
// enable HotModuleReload by Webpack, if we're out of production env
// accepts all Routes as change params, embedded into the redux and style providers
if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <AppBase>
        <NextApp />
      </AppBase>,
      entry
    )
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
