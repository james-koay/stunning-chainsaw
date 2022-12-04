import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCardById } from '../apis/cards'

function CardDetails() {
  const [card, setCard] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    const cardId = Number(params.cardid)
    getCardById(cardId)
      .then((card) => {
        setCard(card)
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
  }, [])

  if (isLoading) {
    return <div>loading...</div>
  } else {
    console.log(card)
    return (
      <div className="container">
        <h2>Card Details</h2>
        <div className="collection">
          <div className="card">
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
          </div>
        </div>
      </div>
    )
  }
}

export default CardDetails
