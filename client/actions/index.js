export function addCard(newCard) {
  return {
    type: 'ADD_CARD',
    payload: newCard,
  }
}

export function delCard(delCard) {
  return {
    type: 'DEL_CARD',
    payload: delCard,
  }
}

export function updateHand(updateHand) {
  return {
    type: 'UPDATE_HAND',
    payload: updateHand,
  }
}
