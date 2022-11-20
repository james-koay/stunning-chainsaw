import React, { useState, useEffect } from 'react'
import Card from './Card'
import cards from '../../server/public/cards.js'
import { motion } from 'framer-motion'

function Hand() {
  const [cardsInHand, setCardsInHand] = useState([])

  useEffect(() => {
    setCardsInHand(drawCards(7))
  }, [])

  function drawCard() {
    let randomCard = cards.cards[Math.floor(Math.random() * cards.cards.length)]
    return randomCard
  }

  function drawCards(number) {
    let hand = []
    for (let i = 0; i < number; i++) {
      hand.push(drawCard())
    }
    console.log(hand)
    return hand
  }

  return (
    <motion.div className="hand">
      {cardsInHand.map((card, index) => {
        return (
          <Card
            data={card}
            key={index}
            style={{ order: index }}
            setCardsInHand={setCardsInHand}
            cardsInHand={cardsInHand}
          />
        )
      })}
    </motion.div>
  )
}

export default Hand
