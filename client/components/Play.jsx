import React, { useState, useEffect } from 'react'
import Hand from './Hand'
import { getCards } from '../apis/cards'
// import cards from '../../server/public/cards.js'
import Enemy from './Enemy'
import { useDispatch, useSelector } from 'react-redux'
import { updateHand } from '../actions/index'
// import { Link } from 'react-router-dom'

function Play() {
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()
  useEffect(() => {
    getCards()
      .then((cards) => {
        setCards(cards)
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
  }, [])

  function drawCards(number) {
    let hand = []
    for (let i = 0; i < number; i++) {
      let newCard = drawCard()
      newCard.order = i
      hand.push(newCard)
    }
    return hand
  }

  function drawCard() {
    let randomCard = cards[Math.floor(Math.random() * cards.length)]
    let cloneCard = { ...randomCard }
    return cloneCard
  }

  function endTurn() {
    console.log('endturn')
    dispatch(updateHand(drawCards(4)))
  }

  if (isLoading) {
    return <div>loading...</div>
  } else {
    dispatch(updateHand(drawCards(5)))
    return (
      <div className="container">
        <Enemy />
        <Hand endTurn={endTurn} />
      </div>
    )
  }
}

export default Play
