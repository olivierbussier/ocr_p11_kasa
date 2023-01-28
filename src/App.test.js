// app.test.js
import {screen, waitFor } from '@testing-library/react'
import App from './App'
import React from 'react'
import '@testing-library/jest-dom'

import renderWithRouter from './testUtils'

test('full app rendering/navigating', async () => {
  const {user} = renderWithRouter(<App />)
  expect(screen.getByText(/Chez vous, partout et ailleurs/i)).toBeInTheDocument()

  const button = screen.getByText(/A Propos/i)

  await user.click(button)
  // console.log(toto)
  await waitFor(() => expect(screen.getByText(/La sécurité est la priorité de Kasa/i)).toBeInTheDocument())
  console.log(button)

})
