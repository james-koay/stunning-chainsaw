import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <h1>Slay the Beast!</h1>
      <Link className="start-link" to={'/play'}>
        Start
      </Link>
    </div>
  )
}

export default Home
