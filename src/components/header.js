import { Link } from 'gatsby'
import React from 'react'

export const Header = ({ title, description }) => {
  return (
    <>
      <Link to="/">
        <header>{title}</header>
        <p>{description}</p>
      </Link>
    </>
  )
}
