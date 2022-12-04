import React, { useState, useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'

function Hand(props) {
  let hand = useSelector((state) => state.hand)

  if (hand.length == 0) {
    return (
      <div className="hand">
        <motion.div
          className="button-end-turn"
          onClick={props.endTurn}
          onKeyUp={props.endTurn}
          role="button"
          tabIndex="0"
          whileHover={{ scale: 1.1 }}
        >
          <h1>End Turn</h1>
        </motion.div>
      </div>
    )
  } else {
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
}

export default Hand
