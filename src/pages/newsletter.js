import React from 'react'
import styled from 'styled-components'
import { H1, P } from '../components/page-elements'

const Wrapper = styled.main`
  min-height: 60vh;
  form {
    display: grid;
    label,
    button {
      padding: 1rem 0;
    }
    input {
      margin: 1rem 0;
      height: 2rem;
    }
  }
`

export default function MailingList() {
  return (
    <Wrapper>
      <H1>Newsletter</H1>
      <P>
        Occasional details about intersting things I'm working on.
      </P>
      <form
        class="kwes-form"
        action="https://kwes.io/api/foreign/forms/j7gBZsxccB5zeDXJ6ZNY"
      >
        <label for="name">Your Name:</label>
        <input
          type="text"
          name="name"
          rules="required|max:255"
        ></input>
        <label for="email">Your Email:</label>
        <input
          type="text"
          name="email"
          rules="required|max:255"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  )
}
