import React from 'react'
import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Home() {
  return (
    <div className="home">
      <h1>Slay the Beast.</h1>
      <IfNotAuthenticated>
        <h1>Login to play!</h1>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <Link to={'/play'}>
          <div className="start-link">Start</div>
        </Link>
      </IfAuthenticated>
    </div>
  )
}

export default Home
