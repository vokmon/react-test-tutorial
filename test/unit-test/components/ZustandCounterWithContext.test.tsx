import { ZustandCounterWithContext } from '@/components/ZustandCounterWithContext'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'


describe('CounterWithContext', () => {
  it('should render with initial state of 1', async () => {
    renderCounterWithContext()

    expect(await screen.findByText(/^1$/)).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: /one up/i }),
    ).toBeInTheDocument()
  })

  it('should increase count by clicking a button', async () => {
    const user = userEvent.setup()

    renderCounterWithContext()

    expect(await screen.findByText(/^1$/)).toBeInTheDocument()

    await act(async () => {
      await user.click(await screen.findByRole('button', { name: /one up/i }))
    })

    expect(await screen.findByText(/^2$/)).toBeInTheDocument()
  })
})

const renderCounterWithContext = () => {
  return render(<ZustandCounterWithContext />)
}
