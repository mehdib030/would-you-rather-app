import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Nav from '../components/Nav'

jest.mock('react-router-dom', () => ({
  NavLink: ({ children, to, onClick, className }) => (
    <a href={to} onClick={onClick}>{children}</a>
  ),
}))

describe('Nav', () => {
  const defaultProps = {
    authedUserName: 'Sarah Edo',
    updateShowLogin: jest.fn(),
  }

  it('renders without crashing', () => {
    const { container } = render(<Nav {...defaultProps} />)
    expect(container).toBeTruthy()
  })

  it('displays the authed user name', () => {
    const { getByText } = render(<Nav {...defaultProps} />)
    expect(getByText('Hello, Sarah Edo')).toBeTruthy()
  })

  it('renders navigation links', () => {
    const { getByText } = render(<Nav {...defaultProps} />)
    expect(getByText('Home')).toBeTruthy()
    expect(getByText('New Question')).toBeTruthy()
    expect(getByText('Leader Board')).toBeTruthy()
    expect(getByText('Logout')).toBeTruthy()
  })

  it('calls updateShowLogin when Logout is clicked', () => {
    const updateShowLogin = jest.fn()
    const { getByText } = render(
      <Nav authedUserName="Sarah Edo" updateShowLogin={updateShowLogin} />
    )
    fireEvent.click(getByText('Logout'))
    expect(updateShowLogin).toHaveBeenCalledWith(true, '')
  })
})
