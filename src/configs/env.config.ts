import { version } from '../../package.json'

export function envConfig() {
  const {
    NODE_ENV,
    ENV,
    // PUBLIC_URL,
    CI,
    REACT_APP_ERRORTRACKER_TOKEN,
    REACT_APP_FIREBASE_APIKEY,
    REACT_APP_FIREBASE_PROJECTID,
    REACT_APP_FIREBASE_MESSAGINGID,
    REACT_APP_FIREBASE_APPID
  } = process.env
  return {
    isTestEnv: NODE_ENV === 'test' || Boolean(CI) === true,
    isDevEnv: NODE_ENV === 'development',
    isStagingEnv: NODE_ENV === 'production',
    isProdEnv: NODE_ENV === 'production' && ENV === 'production',
    version: version,
    errorTrackerToken: REACT_APP_ERRORTRACKER_TOKEN,
    firebase: {
      apiKey: REACT_APP_FIREBASE_APIKEY,
      projectId: REACT_APP_FIREBASE_PROJECTID,
      messagingSenderId: REACT_APP_FIREBASE_MESSAGINGID,
      appId: REACT_APP_FIREBASE_APPID
    }
  }
}
