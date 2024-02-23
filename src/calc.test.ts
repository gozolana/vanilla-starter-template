import { expect, test } from 'vitest'
import { add, subtract } from './calc'

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})

test('subtract 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1)
})
