import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Enemy() {
  let game = useSelector((state) => state.game)

  return (
    <div className="enemy-container">
      <div className="status-bar">
        <h1>Enemy life: {game.enemyLife}</h1>
        <h1>Player life: {game.heroLife}</h1>
        <h1>Player armor: {game.heroArmor}</h1>
      </div>
      <div className="enemy">
        <img
          draggable="false"
          src="images/brute.png"
          alt="cardimage"
          className="enemy-image"
        ></img>
      </div>
    </div>
  )
}

export default Enemy
