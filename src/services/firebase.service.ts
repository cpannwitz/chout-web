import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/messaging'

import { firebaseConfig } from '../configs/firebase.config'
const config = firebaseConfig()

export function initializeFirebase(fbConfig: Object = config) {
  firebase.initializeApp(fbConfig)
}
