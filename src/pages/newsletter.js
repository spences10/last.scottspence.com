import ConvertKitForm from 'convertkit-react'
import React from 'react'
import styled from 'styled-components'
import { H1 } from '../components/page-elements'

const Wrapper = styled.main`
  display: grid;
  min-height: 60vh;
  form {
  }
`

export default () => {
  return (
    <Wrapper>
      <H1>Newsletter</H1>
      <ConvertKitForm formId={`1384272`} />
    </Wrapper>
  )
}
