import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'



const App = () => {
  return (
    <div className='container-fluid bg-secondary '>
      <div className='row'>
        <div className='col-2 bg-white vh-100'>
          <Sidebar />
        </div>
        <div className='col'>
<Home />
        </div>
      </div>
    </div>

  )
}

export default App

