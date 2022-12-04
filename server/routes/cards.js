const express = require('express')

const { getCards, getCardById } = require('../../db')

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

module.exports = router
