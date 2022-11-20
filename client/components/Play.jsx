import React from 'react'
import Hand from './Hand'
import Enemy from './Enemy'
// import { Link } from 'react-router-dom'

function Play() {
  return (
    <div className="container">
      <Enemy />
      <Hand />
    </div>
  )
}

export default Play
