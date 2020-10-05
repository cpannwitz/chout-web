import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

import { envConfig } from './env.config'

export function errorTrackerConfig() {
  const env = envConfig()
  return {
    dsn: env.errorTrackerToken,
    integrations: [new Integrations.BrowserTracing()],
    environment: '',
    enabled: env.isStagingEnv || env.isProdEnv,
    release: env.version,
    // We recommend adjusting this value in production, or using tracesSampler for finer control
    tracesSampleRate: env.isDevEnv ? 1 : 0.1
  } as Sentry.BrowserOptions
}
