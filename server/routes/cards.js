const express = require('express')

const {
  getCards,
  getCardById,
  newCard,
  updateCardById,
  deleteCardById,
} = require('../../db')

const router = express.Router()

// GET /api/v1/cards
router.get('/', (req, res) => {
  getCards()
    .then((cards) => res.json(cards))
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

// GET /api/v1/cards/:cardid
router.get('/:cardid', (req, res) => {
  const id = req.params.cardid
  getCardById(id)
    .then((card) => {
      res.json(card)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

// POST /api/v1/cards/new
router.post('/new', (req, res) => {
  const card = req.body
  newCard(card)
    .then((card) => {
      res.json(card)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

// PATCH /api/v1/cards/edit
router.patch('/edit', (req, res) => {
  const card = req.body
  updateCardById(card)
    .then((card) => {
      res.json(card)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

// DELETE /api/v1/cards/delete/:id
router.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  deleteCardById(id)
    .then(() => {
      res.json(id)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

module.exports = router
