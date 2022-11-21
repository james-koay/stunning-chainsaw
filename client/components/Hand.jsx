import React, { useState, useEffect } from 'react'
import Card from './Card'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'

function Hand() {
  const [hand, setHand] = useState([])
  let handData = useSelector((state) => state.hand)

  useEffect(() => {
    setHand(handData)
  })

  return (
    <div className="hand">
      {hand.map((card, index) => {
        return (
          <Card
            data={card}
            key={index}
            // style={{ order: { index } }}
          />
        )
      })}
    </div>
  )
}

export default Hand
