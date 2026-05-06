import React from 'react'
import { render } from '@testing-library/react'
import LeaderBoardItem from '../components/LeaderBoardItem'

describe('LeaderBoardItem', () => {
  const mockUser = {
    id: 'sarahedo',
    name: 'Sarah Edo',
    answers: { q1: 'optionOne', q2: 'optionTwo' },
    questions: ['q3', 'q4', 'q5'],
  }

  it('renders without crashing', () => {
    const { container } = render(<LeaderBoardItem user={mockUser} />)
    expect(container).toBeTruthy()
  })

  it('displays the user name', () => {
    const { getByText } = render(<LeaderBoardItem user={mockUser} />)
    expect(getByText('Sarah Edo')).toBeTruthy()
  })

  it('displays the user id', () => {
    const { getByText } = render(<LeaderBoardItem user={mockUser} />)
    expect(getByText('sarahedo')).toBeTruthy()
  })

  it('displays the correct answered questions count', () => {
    const { getByText } = render(<LeaderBoardItem user={mockUser} />)
    expect(getByText('Answered Questions : 2')).toBeTruthy()
  })

  it('displays the correct created questions count', () => {
    const { getByText } = render(<LeaderBoardItem user={mockUser} />)
    expect(getByText('Created Questions : 3')).toBeTruthy()
  })

  it('displays the correct score', () => {
    const { getByText } = render(<LeaderBoardItem user={mockUser} />)
    expect(getByText('Score : 5')).toBeTruthy()
  })
})
