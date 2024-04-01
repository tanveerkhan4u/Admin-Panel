import React, { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Table from './Components/admin/Table'

import Admin from './Components/admin'
import Form from './Components/admin/Form'
import Add from './Components/Add'
import View from './Components/admin/View'
import Course from './Components/admin/Course'



const App = () => {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/admin/Table" />} />
        <Route path='/admin' element={<Admin />}>
          <Route path='Table' element={<Table />} />
          <Route path='Form' element={<Form />} />
          <Route path='Add' element={<Add />} />
          <Route path='View' element={<View />} />
          <Route path='Course' element={<Course />} />
          {/* <Route path='' element={<Table />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;







