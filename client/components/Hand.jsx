import React, { useState, useEffect } from 'react'
import Card from './Card'
import cards from '../../server/public/cards.js'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { updateHand } from '../actions/index'

function Hand() {
  const dispatch = useDispatch()
  // const [cardsInHand, setCardsInHand] = useState([])

  useEffect(() => {
    let newHand = drawCards(7)
    dispatch(updateHand(newHand))
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

  let hand = useSelector((state) => state.hand)

  return (
    <motion.div className="hand">
      {hand.map((card, index) => {
        return <Card data={card} key={index} style={{ order: index }} />
      })}
    </motion.div>
  )
}

export default Hand
