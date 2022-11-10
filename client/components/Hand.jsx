import React, { useRef } from 'react'
import Card from './Card'
import { motion } from 'framer-motion'

function Hand() {
  const constraintsRef = useRef(null)
  return (
    <motion.div className="hand" ref={constraintsRef}>
      <Card constraint={constraintsRef} />
      <Card constraint={constraintsRef} />
      <Card constraint={constraintsRef} />
      <Card constraint={constraintsRef} />
      <Card constraint={constraintsRef} />
      <Card constraint={constraintsRef} />
    </motion.div>
  )
}

export default Hand
