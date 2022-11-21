import React, { useState, useEffect } from 'react'
import Card from './Card'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'

function Hand() {
  let hand = useSelector((state) => state.hand)

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
