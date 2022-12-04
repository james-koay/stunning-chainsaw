import request from 'superagent'

const rootUrl = '/api/v1'

// GET /api/v1/cards
export function getCards() {
  return request.get(rootUrl + '/cards').then((res) => {
    return res.body
  })
}

// GET /api/v1/cards/:cardid
export function getCardById(id) {
  return request.get(rootUrl + '/cards/' + id).then((res) => {
    return res.body
  })
}

// POST /api/v1/cards/new
export function newCard(card) {
  return request
    .post(rootUrl + '/cards/new')
    .send(card)
    .then((res) => {
      return res.body
    })
}

// PATCH /api/v1/cards/edit
export function editCard(card) {
  return request
    .patch(rootUrl + '/cards/edit')
    .send(card)
    .then((res) => {
      return res.body
    })
}

// delete /api/v1/cards/delete/:id
export function deleteCard(id) {
  return request.delete(rootUrl + '/cards/delete/' + id).then((res) => {
    return res.body
  })
}
