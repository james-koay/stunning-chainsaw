import React from 'react'
import Hand from './Hand'
// import { Link } from 'react-router-dom'

function Play() {
  return (
    <div className="container">
      <div className="board"></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Hand />
      </div>
    </div>
  )
}

export default Play
