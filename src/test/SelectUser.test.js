import React from 'react'
import { render } from '@testing-library/react'
import SelectUser from '../components/SelectUser'

describe('SelectUser', () => {
  it('renders without crashing', () => {
    const selectUser = jest.fn()
    const { container } = render(<SelectUser selectUser={selectUser} />)
    expect(container).toBeTruthy()
  })

  it('renders the User label', () => {
    const selectUser = jest.fn()
    const { container } = render(<SelectUser selectUser={selectUser} />)
    const label = container.querySelector('label')
    expect(label.textContent).toBe('User')
  })

  it('renders the form element', () => {
    const selectUser = jest.fn()
    const { container } = render(<SelectUser selectUser={selectUser} />)
    expect(container.querySelector('form')).toBeTruthy()
  })

  it('renders a select input', () => {
    const selectUser = jest.fn()
    const { container } = render(<SelectUser selectUser={selectUser} />)
    const select = container.querySelector('[role="combobox"]')
    expect(select).toBeTruthy()
  })
})
