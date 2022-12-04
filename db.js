const config = require('./knexfile').development
const connection = require('knex')(config)

function getCards(db = connection) {
  return db('cards').select()
}

// Your DB functions go here

function close(db = connection) {
  db.destroy()
}

function deleteCardById(id, db = connection) {
  return db('cards').delete().where('id', id)
}

function newCard(newcard, db = connection) {
  return db('cards').insert(newcard)
}

function updateCardByName(name, updatedCard, db = connection) {
  return db('cards').update(updatedCard).where('name', name)
}

function updateCardById(updatedCard, db = connection) {
  return db('cards').update(updatedCard).where('id', updatedCard.id)
}

function searchCardByName(name, db = connection) {
  return db('cards').select().where('name', 'LIKE', `%${name}%`)
}

function getCardById(id, db = connection) {
  return db('cards').select().where('id', id).first()
}

module.exports = {
  getCards,
  close,
  deleteCardById,
  newCard,
  updateCardByName,
  searchCardByName,
  getCardById,
  updateCardById,
}
