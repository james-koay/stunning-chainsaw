const initialState = { heroArmor: 10, enemyLife: 100, heroLife: 50 }

const gameReducer = (state = initialState, action) => {
  const { type, payload } = action
  const newState = { ...state }
  switch (type) {
    case 'UPDATE_ARMOR':
      newState.heroArmor = newState.heroArmor + payload
      return newState
    case 'UPDATE_ENEMY_LIFE':
      newState.enemyLife = newState.enemyLife + payload
      return newState
    case 'UPDATE_HERO_LIFE': {
      newState.heroLife = newState.heroLife + payload
      return newState
    }
    default:
      return state
  }
}

export default gameReducer
