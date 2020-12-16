import { render } from '@testing-library/react'
import React from 'react'
import Header from './header'

test('Renders the table', () => {
  render(<Header siteTitle={`Yo`} />)
})
