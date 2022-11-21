import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Enemy() {
  let game = useSelector((state) => state.game)

  let enemyImage = 'images/brute.png'
  let enemyLife = game.enemyLife

  if (game.enemyLife <= 0) {
    enemyImage = 'images/telefrag.png'
    enemyLife = 'Dead'
  } else {
    enemyImage = 'images/brute.png'
    enemyLife = game.enemyLife
  }

  return (
    <div className="enemy-container">
      <div className="status-bar">
        <h1>Enemy life: {enemyLife}</h1>
        <h1>Player life: {game.heroLife}</h1>
        <h1>Player armor: {game.heroArmor}</h1>
      </div>
      <div className="enemy">
        <img
          draggable="false"
          src={enemyImage}
          alt="cardimage"
          className="enemy-image"
        ></img>
      </div>
    </div>
  )
}

export default Enemy
