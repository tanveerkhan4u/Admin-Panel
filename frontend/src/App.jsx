import React, { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Table from './Components/admin/Table'

import Admin from './Components/admin'
import Form from './Components/admin/Form'



const App = () => {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/admin/Table" />} />
        <Route path='/admin' element={<Admin />}>
          <Route path='Table' element={<Table />} />
          <Route path='Form' element={<Form />} />
          {/* <Route path='' element={<Table />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;







