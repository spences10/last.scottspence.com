import React from 'react'
import styled from 'styled-components'
import 'victormono'
import { P } from './page-elements'
import { Link, rainbowAnimation } from './shared-styles'

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing[8]};
  a {
    font-family: 'Vicror Mono', 'Courier New', Courier, monospace;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-top: ${({ theme }) => theme.spacing[8]};
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    display: block;
    text-align: center;
    ${rainbowAnimation}
  }
  span {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    display: block;
    text-align: center;
  }
`
export const Newsletter = () => {
  return (
    <Wrapper>
      <P>
        If you're interested in occasional updates from me about what
        I'm working on and want helpful information you can sign up to
        my newsletter.
      </P>
      <P>
        Important dev related content, directly to your inbox (for
        free).
      </P>
      <P>
        <span>✨ ✨ ✨ ✨ ✨ ✨ ✨</span>
        I'm giving away sticker packs every Monday, Wednesday and
        Friday to a randomly chosen newsletter subscriber. 👇
      </P>
      <Link to="/newsletter">Newsletter signup...</Link>
    </Wrapper>
  )
}
