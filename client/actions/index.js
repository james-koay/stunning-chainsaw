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

export function updateHeroArmor(change) {
  return {
    type: 'UPDATE_ARMOR',
    payload: change,
  }
}

export function updateEnemyLife(change) {
  return {
    type: 'UPDATE_ENEMY_LIFE',
    payload: change,
  }
}

export function updateHeroLife(change) {
  return {
    type: 'UPDATE_HERO_LIFE',
    payload: change,
  }
}
