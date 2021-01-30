/**
 * This is what is used to send the contact to SendGrid
 * the `list_ids` is from my contacts list in SendGrid
 * that is the id of my Newsletter list
 */

export default async function happyForm(email, name) {
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
          first_name: name,
        },
      ],
    }),
  })
}
