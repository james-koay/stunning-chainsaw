import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getPokemonById } from '../apiClient'

function Card(props) {
  const [pokemonData, setPokemonData] = useState({})
  const [isPokemonLoading, setIsPokemonLoading] = useState(true)

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
      onDragEnd={(event, info) => {
        console.log(info.point.x, info.point.y)
      }}
      onDragStart={(event, info) => {
        console.log(info.point.x, info.point.y)
      }}
    >
      <div className="card-frame">
        <img
          onDragStart={(event) => {
            event.preventDefault()
          }}
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
