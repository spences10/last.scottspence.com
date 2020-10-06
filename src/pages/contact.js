import React, { useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  display: grid;
  min-height: 60vh;
`

export default () => {
  useEffect(() => {
    if (window.location.hostname === `localhost`) {
      console.log(`I'm on localhost`)
    }
    window.kwesFormsInitialize()
  })
  return (
    <Wrapper>
      <form
        class="kwes-form"
        action="https://kwes.io/api/foreign/forms/Qy4BcJqzGSbPj3slxjeG"
      >
        <label for="name">Your Name</label>
        <input type="text" name="name" rules="required"></input>
        <input
          type="email"
          name="email_address"
          rules="required|email"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  )
}
