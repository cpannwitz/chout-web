import { init, captureException, showReportDialog, withScope } from '@sentry/browser'
import { errorTrackerConfig } from '../configs/errorTracker.config'
import { envConfig } from '../configs/env.config'

export function initializeErrorTracker() {
  init(errorTrackerConfig())
}

export function errorTracker(error: Error, info: { componentStack: string }) {
  withScope(() => {
    const eventId = captureException(error, {
      contexts: { react: { componentStack: info.componentStack } }
    })
    if (envConfig.isStagingEnv || envConfig.isProdEnv) {
      showReportDialog({ eventId })
    }
  })
}
