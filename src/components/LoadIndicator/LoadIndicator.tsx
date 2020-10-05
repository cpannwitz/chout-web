import React from 'react'
import PuffLoader from 'react-spinners/PuffLoader'

interface LoadIndicatorProps {
  size?: number
  color?: string
}

const DEFAULT_SIZE = 60
const DEFAULT_COLOR = '#ffffff'

export const LoadIndicator = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR
}: LoadIndicatorProps) => {
  return <PuffLoader size={size} color={color} />
}
