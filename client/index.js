import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import store from './store'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Auth0Provider
        domain="https://ahoaho-james-k.au.auth0.com"
        clientId="rpR1Jtbc1WUU5D9RX5I3Py9JEEzxmBap"
        redirectUri={window.location.origin}
        audience="https://stunning-chainsaw/api"
      >
        <Provider store={store}>
          <App />
        </Provider>
      </Auth0Provider>
    </Router>,
    document.getElementById('app')
  )
})
