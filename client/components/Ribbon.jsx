import React from 'react'
import { Link } from 'react-router-dom'

function Ribbon() {
  return (
    <div className="ribbon">
      <Link to={'/'}>
        <div className="button">
          <h1>Home</h1>
        </div>
      </Link>
      <Link to={'/play'}>
        <div className="button">
          <h1>Play</h1>
        </div>
      </Link>
    </div>
  )
}

export default Ribbon
