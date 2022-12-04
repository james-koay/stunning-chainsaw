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
  return request.get(rootUrl + '/cards/' + { id }).then((res) => {
    return res.body
  })
}
