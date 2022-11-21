import React, { useState, useEffect } from 'react'
import Hand from './Hand'
import cards from '../../server/public/cards.js'
import Enemy from './Enemy'
import { useDispatch, useSelector } from 'react-redux'
import { updateHand } from '../actions/index'
// import { Link } from 'react-router-dom'

function Play() {
  const dispatch = useDispatch()
  useEffect(() => {
    let newHand = drawCards(7)
    dispatch(updateHand(newHand))
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
    let randomCard = cards.cards[Math.floor(Math.random() * cards.cards.length)]
    let cloneCard = { ...randomCard }
    return cloneCard
  }

  return (
    <div className="container">
      <Enemy />
      <Hand />
    </div>
  )
}

export default Play
