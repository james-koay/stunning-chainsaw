const initialHandState = []

const handReducer = (state = initialHandState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_CARD':
      return [...state, payload]
    case 'DEL_CARD':
      const newState = state
      newState.splice(payload.key, 1)
      return newState
    case 'UPDATE_HAND': {
      const newState = payload
      return newState
    }
    default:
      return state
  }
}

export default handReducer
