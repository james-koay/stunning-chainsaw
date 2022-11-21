import { combineReducers } from 'redux'

import hand from './hand'
import game from './game'

export default combineReducers({
  hand,
  game,
})
