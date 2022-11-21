import handReducer from './hand'
import { addCard, delCard } from '../actions'

describe('Fox Reducer Testing', () => {
  test('Add card', () => {
    const testCard = {
      name: 'testCard',
      image: 'images.png',
      effect: { target: 'HeroLife', value: 150 },
      description: 'Gain 150 life',
      order: 0,
    }
    const state = []
    const action = addCard(testCard)
    const newState = handReducer(state, action)
    expect(newState).toHaveLength(1)
  })
  test('Delete card', () => {
    const state = [
      { name: 'Fly', order: 1 },
      { name: 'Climb', order: 2 },
      { name: 'Swim', order: 3 },
    ]
    const action = delCard({ name: 'Climb', order: 2 })
    const newState = handReducer(state, action)

    expect(newState).not.toContain({ name: 'Climb', order: 2 })
    expect(newState).toHaveLength(2)
  })

  // test('has initial state', () => {
  //   const state = foxReducer(undefined, { type: '@@TEST' })
  //   expect(state).toHaveLength(3)
  // })
})
