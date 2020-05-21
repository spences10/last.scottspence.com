import { Link } from 'gatsby'
import React from 'react'
import { P } from './page-elements'

export const Header = ({ title, description }) => {
  return (
    <header>
      <Link to="/" id="top-of-page">
        <P>{title}</P>
        <P>{description}</P>
      </Link>
    </header>
  )
}
