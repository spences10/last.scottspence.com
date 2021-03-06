import React from 'react'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import 'victormono'
import { NewsLetterForm } from '../components/newsletter-form'
import { P } from './page-elements'
import { rainbowAnimation } from './shared-styles'

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing[12]};
  .newsletterShine {
    font-family: 'Vicror Mono', 'Courier New', Courier, monospace;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-top: ${({ theme }) => theme.spacing[8]};
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    display: block;
    text-align: center;
  }
  .shimmer {
    ${rainbowAnimation}
  }
  span {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    display: block;
    text-align: center;
  }
  p,
  h2 {
    text-align: center;
  }
  .visuallyhidden {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  form {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 2fr 1fr;
    margin-top: ${({ theme }) => theme.spacing[10]};
    ${down('sm')} {
      grid-template-columns: repeat(1, 1fr);
      margin: 0 auto;
    }
  }
  input,
  button {
    height: 30px;
    border-radius: 5px;
    border: none;
    box-shadow: var(--box-shadow-xl);
  }
  input {
    padding: 10px;
  }
  button {
    cursor: pointer;
    background: linear-gradient(
      180turn,
      var(
        --title-gradient-from,
        ${({ theme }) => theme.colors.primary[200]}
      ),
      var(
        --title-gradient-to,
        ${({ theme }) => theme.colors.primary[500]}
      )
    );
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`
export const Newsletter = () => {
  return (
    <Wrapper>
      <span role="img" aria-label="sparkles">
        ✨ ✨ ✨ ✨ ✨ ✨ ✨
      </span>
      <P>Want to keep up to date with what I'm working on?</P>
      <P>
        Important dev related content, directly to your inbox (for
        free).
      </P>
      <span role="img" aria-label="sparkles">
        ✨ ✨ ✨ ✨ ✨ ✨ ✨
      </span>
      <span className="newsletterShine shimmer">
        Newsletter signup...
      </span>
      <NewsLetterForm />
    </Wrapper>
  )
}
