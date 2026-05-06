import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import TabPanel from '../components/TabPanel'

describe('TabPanel', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <TabPanel value={0} index={0}>
        <div>Content</div>
      </TabPanel>
    )
    expect(container).toBeTruthy()
  })

  it('shows children when value matches index', () => {
    const { getByText } = render(
      <TabPanel value={0} index={0}>
        <div>Visible Content</div>
      </TabPanel>
    )
    expect(getByText('Visible Content')).toBeTruthy()
  })

  it('hides content when value does not match index', () => {
    const { container } = render(
      <TabPanel value={1} index={0}>
        <div>Hidden Content</div>
      </TabPanel>
    )
    const panel = container.querySelector('[role="tabpanel"]')
    expect(panel).toHaveAttribute('hidden')
  })

  it('has correct aria attributes', () => {
    const { container } = render(
      <TabPanel value={0} index={0}>
        <div>Content</div>
      </TabPanel>
    )
    const panel = container.querySelector('[role="tabpanel"]')
    expect(panel).toHaveAttribute('id', 'simple-tabpanel-0')
    expect(panel).toHaveAttribute('aria-labelledby', 'simple-tab-0')
  })
})
