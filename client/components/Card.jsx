import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  delCard,
  updateEnemyLife,
  updateHeroLife,
  updateHeroArmor,
} from '../actions/index'
import { useDispatch } from 'react-redux'

function Card(props) {
  const dispatch = useDispatch()

  const [dragInfo, setDragInfo] = useState({ x: 0, y: 0 })

  function handleDragStart(event, info) {
    event.preventDefault()
    setDragInfo({
      x: info.point.x,
      y: info.point.y,
    })
  }

  function resolveEffect(data) {
    if (data.effect_target == 'heroLife') {
      dispatch(updateHeroLife(data.effect_value))
    } else if (data.effect_target == 'enemyLife') {
      dispatch(updateEnemyLife(data.effect_value))
    } else if (data.effect_target == 'heroArmor') {
      dispatch(updateHeroArmor(data.effect_value))
    }
  }

  function handleDragEnd(event, info) {
    console.log(dragInfo.x, dragInfo.y)
    console.log(info.point.x, info.point.y)
    console.log(event)
    let changeX = dragInfo.x - info.point.x
    let changeY = dragInfo.y - info.point.y
    if (changeY > 150) {
      console.log('card is played')

      dispatch(delCard(props.data.order))
      resolveEffect(props.data)
    } else if (changeX > 100) {
      console.log('card moved left')
    } else if (changeX < -100) {
      console.log('card moved right')
    }
  }

  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.5 }}
      drag
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      dragDirectionLock
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="card-frame">
        <div className="card-name">{props.data.name}</div>
        <img
          draggable="false"
          src={props.data.image}
          alt="cardimage"
          className="card-image"
        ></img>
        <div className="card-text">{props.data.description}</div>
      </div>
    </motion.div>
  )
}

export default Card
