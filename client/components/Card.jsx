import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getPokemonById } from '../apiClient'

function Card(props) {
  const [pokemonData, setPokemonData] = useState({})
  const [isPokemonLoading, setIsPokemonLoading] = useState(true)
  const [dragInfo, setDragInfo] = useState({ x: 0, y: 0 })

  // function handleDragUp(props.cardEffect){
  //   return cardEffect()
  // }

  function handleDragStart(event, info) {
    console.log(info.point.x, info.point.y)
    console.log(event)
    setDragInfo({
      x: info.point.x,
      y: info.point.y,
    })
    console.log(dragInfo.x, dragInfo.y)
  }

  function handleDragEnd(event, info) {
    console.log(dragInfo.x, dragInfo.y)
    console.log(info.point.x, info.point.y)
    console.log(event)
    let changeX = dragInfo.x - info.point.x
    let changeY = dragInfo.y - info.point.y
    if (changeY > 150) {
      console.log('card is played')
      // props.cardEffect()
    } else if (changeX > 100) {
      console.log('card moved left')
    } else if (changeX < -100) {
      console.log('card moved right')
    }
  }

  useEffect(() => {
    setIsPokemonLoading(true)
    console.log(props.constraint)
    getPokemonById(124)
      .then((res) => {
        setPokemonData(res)
      })
      .finally(() => {
        setIsPokemonLoading(false)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  if (isPokemonLoading) return <div>Loading</div>

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
        <img
          draggable="false"
          // src={pokemonData.sprites.front_default}
          src="images/flanged-mace.png"
          alt="cardimage"
          className="card-image"
        ></img>
      </div>
    </motion.div>
  )
}

export default Card
