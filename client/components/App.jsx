import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Play from './Play'
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
      </Routes>
    </div>
  )
}

export default App
