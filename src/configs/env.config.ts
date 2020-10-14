import { name, version } from '../../package.json'

const {
  NODE_ENV = 'development',
  ENV = 'development',
  // PUBLIC_URL,
  CI = 'false',
  REACT_APP_ERRORTRACKER_TOKEN,
  REACT_APP_FIREBASE_APIKEY,
  REACT_APP_FIREBASE_PROJECTID,
  REACT_APP_FIREBASE_MESSAGINGID,
  REACT_APP_FIREBASE_APPID,
  REACT_APP_FIREBASE_CLIENTID,
  REACT_APP_SERVER_URL
} = process.env

export const envConfig = {
  isTestEnv: NODE_ENV === 'test' || Boolean(CI) === true,
  isDevEnv: NODE_ENV === 'development',
  isStagingEnv: NODE_ENV === 'production',
  isProdEnv: NODE_ENV === 'production' && ENV === 'production',
  environment: ENV,
  version: version,
  name: name,
  errorTrackerToken: REACT_APP_ERRORTRACKER_TOKEN,
  firebase: {
    apiKey: REACT_APP_FIREBASE_APIKEY,
    projectId: REACT_APP_FIREBASE_PROJECTID,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGINGID,
    appId: REACT_APP_FIREBASE_APPID,
    clientId: REACT_APP_FIREBASE_CLIENTID
  },
  server: {
    url: REACT_APP_SERVER_URL,
    gql: REACT_APP_SERVER_URL + '/graphql'
  }
}
