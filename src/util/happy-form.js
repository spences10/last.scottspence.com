import React, { useState } from 'react'
/**
 * This is what is used to send the contact to SendGrid
 * the `list_ids` is from my contacts list in SendGrid
 * that is the id of my Newsletter list
 */

export const NewsLetterForm = () => {
  const [email, emailSet] = useState(``)
  const [submitted, submittedSet] = useState(``)

  const SubmitEmail = async () => {
    await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GATSBY_SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        list_ids: ['785c6867-cc31-46e9-84af-c5bf6935acd7'],
        contacts: [
          {
            email,
          },
        ],
      }),
    }).then(() => {
      submittedSet(true)
    })
  }

  return (
    <>
      {!submitted ? (
        <form
          action="#"
          onSubmit={e => {
            e.preventDefault()
            SubmitEmail()
          }}
        >
          <label htmlFor="email" className="visuallyhidden">
            Your Email:
          </label>
          <input
            id="email"
            aria-label="email"
            type="email"
            name="email"
            placeholder="anders@hejlsberg.com"
            required
            value={email}
            onChange={e => emailSet(e.target.value)}
          ></input>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Awesome, you're all signed up! </h2>
          <p>Thanks for showing interest in my content.</p>
        </div>
      )}
    </>
  )
}
