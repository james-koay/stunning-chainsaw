import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCardById, newCard, editCard } from '../apis/cards'

function CardForm() {
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
  const navigate = useNavigate()
  const cardId = Number(params.cardid)
  useEffect(() => {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (type == 'new') {
      newCard(card)
    } else if (type == 'edit') {
      editCard(card)
    }
    console.log(card)
    console.log('submitted')
    navigate('/collection')
  }

  if (isLoading) {
    return <div>loading...</div>
  } else {
    console.log(card)
    return (
      <div className="container">
        <h2>{type} card</h2>
        <form className="container">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            label="Name"
            name="name"
            value={card.name}
            onChange={handleChange}
            maxLength="10"
          ></input>
          <label htmlFor="image">Choose an image:</label>

          <select name="image" id="image">
            <option value="images/amphora.png">amphora.png</option>
            <option value="images/assassin-pocket.png">
              assassin-pocket.png
            </option>
            <option value="images/battered-axe.png">battered-axe.png</option>
            <option value="images/broadsword.png">broadsword.png</option>
            <option value="images/brute.png">brute.png</option>
            <option value="images/broadsword.png">broadsword.png</option>
            <option value="images/checked-shield.png">
              checked-shield.png
            </option>
            <option value="images/dodging.png">dodging.png</option>
            <option value="images/flanged-mace.png">flanged-mace.png</option>
            <option value="images/sharp-axe.png">sharp-axe.png</option>
            <option value="images/broadsword.png">broadsword.png</option>
          </select>

          <label htmlFor="effect_target">Choose a target:</label>
          <select name="effect_target" id="effect_target">
            <option value="heroLife">Hero Life</option>
            <option value="heroLife">Hero Armor</option>
            <option value="enemyLife">Enemy Life</option>
          </select>

          <label htmlFor="effect_target">Choose effect value:</label>
          <select name="effect_target" id="effect_target">
            <option value="25">25</option>
            <option value="20">20</option>
            <option value="15">15</option>
            <option value="10">10</option>
            <option value="5">5</option>
            <option value="0">0</option>
            <option value="-5">-5</option>
            <option value="-10">-10</option>
            <option value="-15">-15</option>
            <option value="-20">-20</option>
            <option value="-25">-25</option>
          </select>

          <label htmlFor="name">Description: </label>
          <input
            id="description"
            type="text"
            label="Description"
            name="description"
            value={card.description}
            onChange={handleChange}
            maxLength="15"
          ></input>

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
