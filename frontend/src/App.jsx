import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'



const App = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2'>
          <Sidebar />
        </div>
        <div className='col'>

        </div>
      </div>
    </div>

  )
}

export default App

