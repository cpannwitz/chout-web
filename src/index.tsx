import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { GlobalStyles } from './styles/GlobalStyles'
import { firebaseConfig } from './configs'
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire'
import LoadingScreen from './modules/LoadingScreen'

interface AppSetup {
  children: React.ReactNode
}
const AppSetup = ({ children }: AppSetup) => {
  const fbConfig = firebaseConfig()
  return (
    <React.StrictMode>
      <FirebaseAppProvider firebaseConfig={fbConfig}>
        <SuspenseWithPerf traceId='app' fallback={<LoadingScreen />}>
          {children}
        </SuspenseWithPerf>
      </FirebaseAppProvider>
      <GlobalStyles />
    </React.StrictMode>
  )
}

// pre get the HTML node React DOM renders into
const rootElement = document.getElementById('root')

// render whole React app into chosen HTML DOM node, public/index.html
const rootNode = ReactDOM.unstable_createRoot(rootElement as Element)
rootNode.render(
  <AppSetup>
    <App />
  </AppSetup>
)
// ReactDOM.render(
//   <AppSetup>
//     <App />
//   </AppSetup>,
//   rootElement
// )

// Hot Module Replacement API
declare let module: { hot: any }
// enable HotModuleReload by Webpack, accepts all Routes as change params
// For more customization options, see: https://medium.com/superhighfives/hot-reloading-create-react-app-73297a00dcad
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    rootNode.render(
      <AppSetup>
        <NextApp />
      </AppSetup>
    )
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
