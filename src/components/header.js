import { Link } from 'gatsby'
import React from 'react'

export const Header = ({ title, description }) => {
  return (
    <>
      <Link to="/" id="top-of-page">
        <header>{title}</header>
        <p>{description}</p>
      </Link>
    </>
  )
}
