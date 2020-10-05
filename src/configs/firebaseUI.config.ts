import { envConfig } from './env.config'
import firebase from 'firebase/app'
import 'firebase/auth'
import { auth as firebaseUIAuth } from 'firebaseui'

const DEFAULT_SIGNIN_URL = '/'
const DEFAULT_TOS_URL = '/tos'
const DEFAULT_PRIVACY_URL = '/privacy'

interface firebaseUIConfigProps {
  signInURL?: string
  tosURL?: string
  privacyURL?: string
}
export function firebaseUIConfig({
  signInURL = DEFAULT_SIGNIN_URL,
  tosURL = DEFAULT_TOS_URL,
  privacyURL = DEFAULT_PRIVACY_URL
}: firebaseUIConfigProps) {
  const env = envConfig().firebase
  return {
    signInFlow: 'popup',
    credentialHelper: firebaseUIAuth.CredentialHelper.GOOGLE_YOLO,
    // autoupgrade enabled needs signInFailure to be configured
    // for explanation, see: https://github.com/firebase/firebaseui-web/#handling-anonymous-user-upgrade-merge-conflicts
    // autoUpgradeAnonymousUsers: false,
    // callbacks: {
    //   signInFailure: (error: firebaseUIAuth.AuthUIError) => {
    //     return new Promise<void>(resolve => {
    //       console.error(error)
    //       resolve()
    //     })
    //   }
    // },
    signInSuccessUrl: signInURL,
    signInOptions: [
      { provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID, clientId: env.clientId },
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID
      // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    tosUrl: tosURL,
    privacyPolicyUrl: privacyURL
  } as firebaseui.auth.Config
}
