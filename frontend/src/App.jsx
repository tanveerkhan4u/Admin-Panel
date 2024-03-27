import React, { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import Form from './Components/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Table from './Components/Table'
import Navbar from './Components/Navbar'



const App = () => {
  
  const [toggle, settoggle] = useState(true)
  const Toggle = () => {
    settoggle(!toggle)
  }

  return (
    <BrowserRouter>
    <div className='container-fluid bg-white min-vh-100'>
      <div className='row'>
       {toggle &&  <div className='col-2 bg-body-secondary vh-100'>
          <Sidebar />
        </div>}
    
        <div className='col'>
          <Home  Toggle={Toggle}/>
        </div>
        <Routes>
          <Route path='/Form' element={<Form />} />
           <Route path='/Table' element={<Table />} />
          </Routes>
      </div>
    </div>
      </BrowserRouter>
  )
}

export default App;
         
          
        
  
        


