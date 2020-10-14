import firebase from 'firebase/app'
import { auth as firebaseUIAuth } from 'firebaseui'
import { envConfig } from './env.config'

const DEFAULT_SIGNIN_URL = '/'
const DEFAULT_TOS_URL = '/tos'
const DEFAULT_PRIVACY_URL = '/privacy'

export function firebaseUIConfig(config: Partial<firebaseui.auth.Config>) {
  return {
    signInFlow: 'popup',
    credentialHelper: firebaseUIAuth.CredentialHelper.GOOGLE_YOLO,
    // autoupgrade enabled needs signInFailure to be configured
    // for explanation, see: https://github.com/firebase/firebaseui-web/#handling-anonymous-user-upgrade-merge-conflicts
    // autoUpgradeAnonymousUsers: false,
    // callbacks: {
    // signInFailure
    // signInSuccessWithAuthResult
    // },
    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        clientId: envConfig.firebase.clientId
      },
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
      // firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: DEFAULT_SIGNIN_URL,
    tosUrl: DEFAULT_TOS_URL,
    privacyPolicyUrl: DEFAULT_PRIVACY_URL,
    ...config
  } as firebaseui.auth.Config
}
