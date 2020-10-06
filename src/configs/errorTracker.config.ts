import * as Sentry from '@sentry/react'

import { envConfig } from './env.config'

export function errorTrackerConfig() {
  const env = envConfig()
  return {
    dsn: env.errorTrackerToken,
    environment: '',
    enabled: env.isStagingEnv || env.isProdEnv,
    release: env.version
  } as Sentry.BrowserOptions
}
