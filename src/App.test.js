import { render, screen } from '@testing-library/react'
import Welcome from './Welcome'

describe('Welcome Component', () => {
  test('should render Welcome component with correct text', () => {
    render(<Welcome />)
    const headingElement = screen.getByRole('heading', { level: 1 })
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveTextContent('Benvenuti in EpiBooks!')
    const alertElement = screen
      .getByText(/Benvenuti in EpiBooks!/i)
      .closest('.alert')
    expect(alertElement).toBeInTheDocument()
  })
})
