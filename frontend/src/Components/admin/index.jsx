import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Home from './Home'


const Admin = () => {

  const [toggle, settoggle] = useState(true)
  const Toggle = () => {
    settoggle(!toggle)
  }
  return (
    <>
      <Navbar Toggle={Toggle} />
      <div className='container-fluid bg-white'>
        <div className='row'>
          {toggle && <div className='col-2 bg-body-secondary'>
            <Sidebar />
          </div>}

          <div className='col' style={{height: '100vh', overflow: 'auto'}}>
            <Outlet Toggle={Toggle} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin