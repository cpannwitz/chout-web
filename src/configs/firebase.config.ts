import { envConfig } from './env.config'

export function firebaseConfig(config?: Object) {
  const env = envConfig.firebase
  return {
    apiKey: env.apiKey,
    authDomain: `${env.projectId}.firebaseapp.com`,
    databaseURL: `https://${env.projectId}.firebaseio.com`,
    projectId: `${env.projectId}`,
    storageBucket: `${env.projectId}.appspot.com`,
    messagingSenderId: env.messagingSenderId,
    appId: env.appId,
    ...config
  }
}
