import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=' sidebar p-2 '>
      <div className='m-2'>
        <i className='my-2 me-3 fs-4  '></i>
        <span className='brand-name fs-3 fw-bold dash'> # Dashmin</span>
      </div>
      <hr className='text-dark'/>
      <div className='list-group list-group-flush '>
        <a className='list-group-item  py-2  mb-2'>
          <i className="fa-solid fa-gauge-high fs-5 me-3 "></i>
          <span className='fs-5 '>Dashboard</span>
        </a>
        <Link to='/Table' className='list-group-item  py-2 mb-2'>
        <i className="fa-solid fa-table fs-5 me-3"></i>
          <span className='fs-5'>Table</span>
        </Link>
        <Link to='/Form' className='list-group-item  py-2'>
        <i className="fa-solid fa-keyboard fs-5 me-3"></i>
          <span className='fs-5'>Form</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
