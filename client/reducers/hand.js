const initialHandState = []

const handReducer = (state = initialHandState, action) => {
  const { type, payload } = action
  console.log(payload)
  switch (type) {
    case 'ADD_CARD':
      return [...state, payload]
    case 'DEL_CARD':
      return state.filter((card) => card.order !== payload.order)
    case 'UPDATE_HAND': {
      const newState = payload
      return newState
    }
    default:
      return state
  }
}

export default handReducer
