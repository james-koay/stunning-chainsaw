import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCards } from '../apis/cards'
import { motion } from 'framer-motion'

function Collection() {
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    getCards()
      .then((cards) => {
        setCards(cards)
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
  }, [])

  function handleCardClick(id) {
    navigate('/collection/' + id)
  }

  function handleClickNew() {
    navigate('/collection/1/new')
  }

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
                onClick={() => handleCardClick(card.id)}
              >
                <div className="card-frame">
                  <div className="card-name">{card.name}</div>
                  <img
                    draggable="false"
                    src={'/' + card.image}
                    alt="cardimage"
                    className="card-image"
                  ></img>
                  <div className="card-text">{card.description}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
        <div className="container-row">
          <div
            className="button"
            onClick={() => handleClickNew()}
            onKeyPress={() => handleClickNew()}
            role="button"
            tabIndex={0}
            style={{ width: 'max-content', 'margin-top': '15px' }}
          >
            Add New Card
          </div>
        </div>
      </div>
    )
  }
}

export default Collection
