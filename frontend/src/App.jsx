import React from 'react'
import Admin from './Components/Admin'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Admin/>
      <Routes>

        <Route path="Admin" element={<Admin />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

