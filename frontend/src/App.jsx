import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes, NavLink, } from 'react-router-dom';
import Admin from './Components/Admin'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/Admin' element={<Admin />} />

    </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
