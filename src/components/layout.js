import React from 'react'
import styled from 'styled-components'

const AppStyles = styled.main`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 20px;
`

export const Layout = ({ children }) => {
  // const { title, description } = useSiteMetadata()
  return (
    <>
      {/* HEADER */}
      <AppStyles>{children}</AppStyles>
    </>
  )
}
