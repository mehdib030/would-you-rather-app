import React from 'react'
import { render } from '@testing-library/react'
import Page404 from '../components/Page404'

describe('Page404', () => {
  it('renders without crashing', () => {
    const { container } = render(<Page404 />)
    expect(container).toBeTruthy()
  })

  it('displays "Page not found" text', () => {
    const { getByText } = render(<Page404 />)
    expect(getByText('Page not found')).toBeTruthy()
  })
})
