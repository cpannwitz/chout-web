import * as firebase from 'firebase/app'
import React from 'react'

// These imports load individual services into the firebase namespace.
import 'firebase/auth'
import 'firebase/messaging'
import 'firebase/firestore'
// import 'firebase/database'
// import 'firebase/storage'
// import 'firebase/functions'

const { REACT_APP_FB_KEY, REACT_APP_FB_DOMAIN, REACT_APP_FB_MESSAGEID } = process.env

export const firebaseConfig = {
  apiKey: REACT_APP_FB_KEY,
  authDomain: `${REACT_APP_FB_DOMAIN}.firebaseapp.com`,
  projectId: `${REACT_APP_FB_DOMAIN}`,
  databaseURL: `https://${REACT_APP_FB_DOMAIN}.firebaseio.com`,
  messagingSenderId: REACT_APP_FB_MESSAGEID,
  //storageBucket: `${REACT_APP_FB_DOMAIN}.appspot.com`,
}

export const firebaseuiConfig = {
  // Popup signin flow rather than redirect flow.
  autoUpgradeAnonymousUsers: true,
  callbacks: {
    signInFailure: (error: firebaseui.auth.AuthUIError) => {
      return new Promise<void>((res, rej) => {
        res()
      })
    },
  },
  // queryParameterForWidgetMode: 'mode=select',
  signInFlow: 'redirect',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '/tos',
  privacyPolicyUrl: '/privacy',
}

export const initializeFirebase = () => {
  firebase.initializeApp(firebaseConfig)

  firebase.firestore().settings({ timestampsInSnapshots: true })
  firebase
    .firestore()
    .enablePersistence()
    .catch((err) => {
      console.error('Firestore persistence not available.', err)
      // err.code: ['failed-precondition','unimplemented']
    })
  firebase.auth().onAuthStateChanged(handleAuthStateChanged)
  firebase
    .auth()
    .signInAnonymously()
    .catch((error) => {
      console.log('​initializeFirebase -> error', error)
    })
  return firebase
}

export const handleAuthStateChanged = (user?: any) => {
  if (user) {
    console.log('​observeAuthStatus -> user', user)
  } else {
    // User is signed out.
  }
}

export const firebaseContext = (firebase: any) => {
  GlobalFirebaseContext = React.createContext(firebase)
  return GlobalFirebaseContext
}

let GlobalFirebaseContext: any

export const FirebaseProvider = ({ firebase, children }: { firebase: any; children: JSX.Element }) => {
  const FirebaseContext = firebaseContext(firebase)
  return <FirebaseContext.Provider value={firebase}>{children}</FirebaseContext.Provider>
}

export const useFire = () => {
  return React.useContext(GlobalFirebaseContext)
}

export const onFire = (pure?: Boolean) => (Component: any) => {
  const BaseComponent = pure ? React.PureComponent : React.Component
  class OnFire extends BaseComponent {
    render() {
      return <Component firebase={firebase} {...this.props} />
    }
  }

  return React.forwardRef((props: any, ref?: React.Ref<OnFire>) => {
    return <OnFire {...props} forwardedRef={ref} />
  })
}
