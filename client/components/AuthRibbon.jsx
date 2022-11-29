import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function AuthRibbon() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleLogOff = (e) => {
    e.preventDefault()
    logout()
  }

  const handleLogin = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    await loginWithRedirect({
      screen_hint: 'signup',
    })
  }

  return (
    <div className="auth-ribbon">
      <IfNotAuthenticated>
        <button onClick={handleLogin} className="button-small">
          login
        </button>
        <button onClick={handleSignUp} className="button-small">
          sign up
        </button>
      </IfNotAuthenticated>

      <IfAuthenticated>
        <div className="user-name">User: {user?.nickname}</div>
        <button onClick={handleLogOff} className="button-small">
          log off
        </button>
      </IfAuthenticated>
    </div>
  )
}

export default AuthRibbon
