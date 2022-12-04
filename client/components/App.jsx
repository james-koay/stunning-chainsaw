import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Play from './Play'
import Collection from './Collection'
import CardDetails from './CardDetails'
import Ribbon from './Ribbon'
import CardForm from './CardForm'
import AuthRibbon from './AuthRibbon'
import { ProtectedRoute } from '../utils/auth'
function App() {
  return (
    <div>
      <AuthRibbon />
      <Ribbon />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<ProtectedRoute component={Play} />} />
        <Route
          path="/collection"
          element={<ProtectedRoute component={Collection} />}
        />
        <Route
          path="/collection/:cardid"
          element={<ProtectedRoute component={CardDetails} />}
        />
        <Route
          path="/collection/:cardid/:type"
          element={<ProtectedRoute component={CardForm} />}
        />
      </Routes>
    </div>
  )
}

export default App
