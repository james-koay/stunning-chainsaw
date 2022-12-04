import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCards } from '../apis/cards'
import { motion } from 'framer-motion'

function Cards() {
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCards()
      .then((cards) => {
        setCards(cards)
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
  })

  if (isLoading) {
    return <div>loading...</div>
  } else {
    return (
      <div className="container">
        <h2>Card Collection</h2>
        <div className="collection">
          {cards.map((card, index) => {
            return (
              <motion.div
                className="card"
                whileHover={{ scale: 1.5 }}
                key={index}
              >
                <div className="card-frame">
                  <div className="card-name">{card.name}</div>
                  <img
                    draggable="false"
                    src={card.image}
                    alt="cardimage"
                    className="card-image"
                  ></img>
                  <div className="card-text">{card.description}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Cards
