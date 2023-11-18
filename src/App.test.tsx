import App from './App'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  it('should render Hello World in a H1 tag', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: 'Hello World' })).toBeDefined()
  })
})
