import React from 'react'
import styled from 'styled-components'
import 'victormono'
import happyForm from '../util/happy-form'
import useForm from '../util/use-from'
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
  p {
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
    grid-template-columns: 2fr 2fr 1fr;
    margin-top: ${({ theme }) => theme.spacing[10]};
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
    background-color: ${({ theme }) => theme.colors.primary[500]};
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`
export const Newsletter = () => {
  const { values, updateValue } = useForm({ name: ``, email: `` })

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
      <form
        class="kwes-form"
        onSubmit={e => {
          e.preventDefault()
          happyForm(
            values.email,
            values.name,
            '785c6867-cc31-46e9-84af-c5bf6935acd7'
          )
        }}
        action="https://kwes.io/api/foreign/forms/j7gBZsxccB5zeDXJ6ZNY"
      >
        <label htmlFor="name" className="visuallyhidden">
          First Name:
        </label>
        <input
          type="text"
          name="name"
          placeholder="Anders"
          rules="required|max:255"
          value={values.name}
          onChange={updateValue}
        ></input>
        <label htmlFor="email" className="visuallyhidden">
          Your Email:
        </label>
        <input
          type="text"
          name="email"
          placeholder="anders@hejlsberg.com"
          rules="required|max:255"
          value={values.email}
          onChange={updateValue}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  )
}
