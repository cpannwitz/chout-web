import { init, withScope, captureException, showReportDialog } from '@sentry/browser'

class Logger {
  initializeLogger = () => {
    init({
      dsn: process.env.REACT_APP_ERROR_LOGGER_URL,
    })
  }

  logError = (error: Error, info: any) => {
    withScope((scope) => {
      Object.keys(info).forEach((key) => {
        scope.setExtra(key, info[key])
      })
      captureException(error)
    })
  }

  showReport = () => {
    showReportDialog()
  }
}

const ErrorLogger = new Logger()

export default ErrorLogger
