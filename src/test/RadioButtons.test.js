import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import RadioButtons from '../components/RadioButtons'

describe('RadioButtons', () => {
  const mockQuestion = {
    optionOne: { text: 'Learn React', votes: [] },
    optionTwo: { text: 'Learn Angular', votes: [] },
  }

  it('renders without crashing', () => {
    const selectOption = jest.fn()
    const { container } = render(
      <RadioButtons question={mockQuestion} selectOption={selectOption} />
    )
    expect(container).toBeTruthy()
  })

  it('displays both option texts', () => {
    const selectOption = jest.fn()
    const { getByText } = render(
      <RadioButtons question={mockQuestion} selectOption={selectOption} />
    )
    expect(getByText('Learn React')).toBeTruthy()
    expect(getByText('Learn Angular')).toBeTruthy()
  })

  it('calls selectOption when a radio button is clicked', () => {
    const selectOption = jest.fn()
    const { getByLabelText } = render(
      <RadioButtons question={mockQuestion} selectOption={selectOption} />
    )
    fireEvent.click(getByLabelText('Learn Angular'))
    expect(selectOption).toHaveBeenCalledWith('optionTwo')
  })

  it('defaults to optionOne when no savedOption is provided', () => {
    const selectOption = jest.fn()
    const { container } = render(
      <RadioButtons question={mockQuestion} selectOption={selectOption} />
    )
    const checkedRadio = container.querySelector('input[value="optionOne"]')
    expect(checkedRadio).toBeTruthy()
  })
})
