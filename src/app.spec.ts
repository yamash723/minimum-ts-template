import { SayHello } from './app'

describe('SayHello', () => {
  test('toBe "Hello! TypeScript!"', () => {
    expect(SayHello()).toBe('Hello! TypeScript!')
  })

  test('not toBe "Hello! JavaScript!"', () => {
    expect(SayHello()).not.toBe('Hello! JavaScript!')
  })
})
