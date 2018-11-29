import * as Firebase from 'firebase/app'
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
    Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    Firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    Firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    Firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '/tos',
  privacyPolicyUrl: '/privacy',
}

export const initializeFirebase = () => {
  Firebase.initializeApp(firebaseConfig)

  Firebase.firestore().settings({ timestampsInSnapshots: true })
  Firebase.firestore()
    .enablePersistence({ experimentalTabSynchronization: true })
    .catch((err) => {
      console.error('Firestore persistence not available.', err)
      // err.code: ['failed-precondition','unimplemented']
    })
  Firebase.auth().onAuthStateChanged(handleAuthStateChanged)
  Firebase.auth()
    .signInAnonymously()
    .catch((error) => {
      console.log('​initializeFirebase -> error', error)
    })
  return Firebase
}

export const handleAuthStateChanged = (user: Firebase.User | null) => {
  if (user) {
    console.log('​observeAuthStatus -> user', user)
  } else {
    // User is signed out.
  }
}
