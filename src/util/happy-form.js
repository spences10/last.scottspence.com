export default async function happyForm(email, name) {
  await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      list_ids: ['785c6867-cc31-46e9-84af-c5bf6935acd7'],
      contacts: [
        {
          email,
          custom_fields: { name },
        },
      ],
    }),
  })
}
