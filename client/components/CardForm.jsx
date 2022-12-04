import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCardById, newCard, editCard } from '../apis/cards'
import { useDispatch } from 'react-redux'

function CardForm() {
  const dispatch = useDispatch()
  const [card, setCard] = useState({
    name: '',
    image: '',
    effect_target: '',
    effect_value: 0,
    description: '',
  })
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams()
  const type = params.type
  useEffect(() => {
    const cardId = Number(params.cardid)
    console.log(type)
    getCardById(cardId)
      .then((card) => {
        setCard(card)
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
  }, [])

  const handleChange = (e) => {
    console.log(e.target.name)
    setCard({ ...card, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (type == 'new') {
      await dispatch(newCard(card))
    } else if (type == 'edit') {
      await dispatch(editCard(card))
    }
    console.log(card)
    console.log('submitted')
  }

  if (isLoading) {
    return <div>loading...</div>
  } else {
    console.log(card)
    return (
      <div className="container">
        <h2>{type} card</h2>
        <form>
          <ul>
            <input
              type="text"
              label="Name"
              name="name"
              value={card.name}
              onChange={handleChange}
            ></input>
          </ul>
          <div className="container-row">
            <div
              className="button"
              type="submit"
              onClick={handleSubmit}
              role="button"
              onKeyDown={handleSubmit}
              tabIndex={0}
            >
              Submit
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default CardForm
