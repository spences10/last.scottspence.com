import { formatDistance } from 'date-fns'
import React from 'react'

export const DateDistance = ({ date }) => {
  const distance = formatDistance(
    new Date(Date.now()),
    new Date(date)
  )
  return <span>{distance}</span>
}
