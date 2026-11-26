// @vitest-environment jsdom
import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import { useStylingQRCode } from '.'

function Harness({ data }: { data: string }) {
  const { ref } = useStylingQRCode({ width: 300, height: 300, data })
  return <div data-testid="container" ref={ref} />
}

test('renders a single QR code across multiple data updates', () => {
  const { getByTestId, rerender } = render(<Harness data="" />)
  const container = getByTestId('container')
  expect(container.querySelectorAll(':scope > svg')).toHaveLength(0)

  rerender(<Harness data="first" />)
  expect(container.querySelectorAll(':scope > svg')).toHaveLength(1)

  rerender(<Harness data="second" />)
  expect(container.querySelectorAll(':scope > svg')).toHaveLength(1)
})
