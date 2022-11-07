import React from 'react'
import { motion } from 'framer-motion'

function Card() {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.5 }}
      drag
    >
      <div className="card-frame">
        <img
          src="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/c/c4/Fblthp.jpg/revision/latest?cb=20130227232305"
          alt="cardimage"
          className="card-image"
        ></img>
      </div>
    </motion.div>
  )
}

export default Card
