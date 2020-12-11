import React from 'react'
// import styled from 'styled-components'
// import { H1 } from '../components/page-elements'

// const Wrapper = styled.main`
//   display: grid;
//   min-height: 60vh;
//   form {
//   }
// `

export default () => {
  return (
    <main>
      <h1>Newsletter</h1>
      <form
        class="kwes-form"
        action="https://kwes.io/api/foreign/forms/bflGuWmLSpqgCEC5SaIg"
      >
        <label for="name">Your Name</label>
        <input
          type="text"
          name="name"
          rules="required|max:255"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
