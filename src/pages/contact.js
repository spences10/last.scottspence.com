// import kwesforms from 'kwesforms'
import React, { useEffect } from 'react'
// import styled from 'styled-components'

// const Wrapper = styled.main`
//   min-height: 60vh;
//   form {
//     margin: 0 auto;
//     display: grid;
//     max-width: 70%;
//     input,
//     textarea,
//     button {
//       padding: 0.2rem 0.2rem;
//       border-radius: ${({ theme }) => theme.borderRadius.lg};
//       border: 0;
//       font-family: inherit;
//       font-size: inherit;
//     }
//     label {
//       margin-top: 1.5rem;
//     }
//     input {
//       font-weight: ${({ theme }) => theme.fontWeight.semibold};
//     }
//     textarea {
//       height: 100px;
//     }
//     button {
//       margin-top: 3rem;
//       font-weight: ${({ theme }) => theme.fontWeight.semibold};
//       color: ${({ theme }) => theme.colors.gray[100]};
//       background: linear-gradient(
//         180turn,
//         var(
//           --title-gradient-from,
//           ${({ theme }) => theme.colors.primary[200]}
//         ),
//         var(
//           --title-gradient-to,
//           ${({ theme }) => theme.colors.primary[500]}
//         )
//       );
//       padding: 0.65rem 1rem;
//       text-align: center;
//     }
//   }
// `

export default () => {
  useEffect(() => {
    if (window.location.hostname === `localhost`) {
      console.log(`I'm on localhost`)
    }
    kwesforms.init()
  })
  return (
    <main>
      <form
        class="kwes-form"
        action="https://kwes.io/api/foreign/forms/RdkZ6TlyTY0ig4SwrB9s"
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          name="name"
          rules="required|max:255"
        ></input>
        <label htmlFor="email_address">Your Email</label>
        <input
          type="email"
          name="email_address"
          rules="required|email"
        />
        <label htmlFor="message">Your Message</label>
        <textarea name="message" rules="required" />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
