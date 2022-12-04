import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Play from './Play'
import Cards from './Cards'
import Ribbon from './Ribbon'
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
        <Route path="/cards" element={<ProtectedRoute component={Cards} />} />
      </Routes>
    </div>
  )
}

export default App
