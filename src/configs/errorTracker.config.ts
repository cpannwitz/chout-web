import * as Sentry from '@sentry/react'

import { envConfig } from './env.config'

export function errorTrackerConfig(config?: Partial<Sentry.BrowserOptions>) {
  return {
    dsn: envConfig.errorTrackerToken,
    environment: '',
    enabled: envConfig.isStagingEnv || envConfig.isProdEnv,
    release: envConfig.version,
    ...config
  } as Sentry.BrowserOptions
}
