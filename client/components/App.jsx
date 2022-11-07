import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Play from './Play'
import Ribbon from './Ribbon'

function App() {
  return (
    <div>
      <Ribbon />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </div>
  )
}

export default App
