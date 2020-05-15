import { Link } from 'gatsby'
import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export default () => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Link to="/">
        <h1>{title}</h1>
        <p>{description}</p>
      </Link>
      <Link to="garden">Garden</Link>
    </>
  )
}
