const config = require('./knexfile').development
const connection = require('knex')(config)

function getCards(db = connection) {
  return db('cards').select()
}

// Your DB functions go here

function close(db = connection) {
  db.destroy()
}

function deleteCardbyName(name, db = connection) {
  return db('cards').delete().where('name', name)
}

function newCard(newcard, db = connection) {
  return db('cards').insert(newcard)
}

function updateCardByName(name, updatedCard, db = connection) {
  return db('cards').update(updatedCard).where('name', name)
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
  deleteCardbyName,
  newCard,
  updateCardByName,
  searchCardByName,
  getCardById,
}
