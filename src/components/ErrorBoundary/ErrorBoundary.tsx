import React from 'react'

import ErrorLogger from '../../logic/ErrorLogger'

interface ErrorValue {
  [key: string]: string
}

const replaceErrors = (a: any, value: ErrorValue) => {
  if (value instanceof Error) {
    let error: any = {}
    Object.getOwnPropertyNames(value).forEach(function(key) {
      error[key] = value[key]
    })
    return error
  }
}
/**
 * The ErrorBoundary component for errors catched by componentDidCatch in React classes
 *
 * @memberof ErrorBoundary
 */
export class ErrorBoundary extends React.PureComponent {
  displayName = 'ErrorBoundary'
  state = { hasError: false, theError: null }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, theError: error }
  }

  componentDidCatch = (error: Error | null, info: object) => {
    console.error('Error: ', error)
    console.log(info)
    if (process.env.NODE_ENV === 'production' && error) {
      ErrorLogger.logError(error, info)
    }
  }

  render() {
    const { hasError, theError } = this.state
    const { children } = this.props

    if (hasError) {
      if (process.env.NODE_ENV === 'production') {
        return (
          <span
            style={{
              width: 'auto',
              height: 'auto',
              padding: '0.5rem 1rem',
              backgroundColor: '#A62217',
              color: '#ffffff',
            }}
          >
            Whoops, something went wrong!
            <button onClick={() => ErrorLogger.showReport()} style={{ padding: '0.5rem 1rem', margin: '0.5rem' }}>
              Report
            </button>
          </span>
        )
      }
      return (
        <div
          style={{
            width: 'auto',
            height: 'auto',
            padding: '0.25rem 0.5rem',
            backgroundColor: '#A62217',
            color: '#ffffff',
          }}
        >
          <p>Error occurred: </p>
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              width: '100%',
              height: 'auto',
              minWidth: '5rem',
              minHeight: '5rem',
              maxHeight: '14rem',
              maxWidth: '100%',
              overflow: 'auto',
            }}
          >
            {JSON.stringify(theError, replaceErrors, 2)}
          </pre>
        </div>
      )
    }

    return children
  }
}

export default ErrorBoundary
