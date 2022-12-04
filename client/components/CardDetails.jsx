import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCardById } from '../apis/cards'

function CardDetails() {
  const [card, setCard] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const cardId = Number(params.cardid)
    getCardById(cardId)
      .then((card) => {
        setCard(card)
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
  }, [])

  function handleClickEdit() {
    const cardId = Number(params.cardid)
    navigate('/collection/' + cardId + '/edit')
  }

  function handleClickDelete() {
    navigate('/collection')
  }

  if (isLoading) {
    return <div>loading...</div>
  } else {
    console.log(card)
    return (
      <div className="container">
        <h2>Card Details</h2>

        <div
          className="card"
          style={{ transform: 'scale(1.5)', margin: '60px' }}
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
        </div>
        <div className="container-row">
          <div
            className="button-small"
            onClick={() => handleClickEdit()}
            onKeyPress={() => handleClickEdit()}
            role="button"
            tabIndex={0}
          >
            Edit
          </div>
          <div
            className="button-small"
            onClick={() => handleClickDelete()}
            onKeyPress={() => handleClickDelete()}
            role="button"
            tabIndex={0}
          >
            Delete
          </div>
        </div>
      </div>
    )
  }
}

export default CardDetails
