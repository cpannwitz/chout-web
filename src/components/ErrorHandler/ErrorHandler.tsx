import React from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { errorTracker } from '../../services/errorTracker.service'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

interface ErrorHandler {
  children?: React.ReactNode
}
export const ErrorHandler = ({ children }: ErrorHandler) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorTracker}>
      {children}
    </ErrorBoundary>
  )
}
