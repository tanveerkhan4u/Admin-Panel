import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-white sidebar p-2'>
      <div className='m-2'>
        <i className='my-2 me-3 fs-4  '></i>
        <span className='brand-name fs-4'> Dashmin</span>
      </div>
      <hr className='text-dark'/>
      <div className='list-group list-group-flush '>
        <a className='list-group-item  py-2 '>
          <i className="fa-solid fa-gauge-high fs-5 me-3"></i>
          <span className='fs-5'>Dashboard</span>
        </a>
        <a className='list-group-item  py-2 '>
        <i className="fa-solid fa-table fs-5 me-3"></i>
          <span className='fs-5'>Table</span>
        </a>
        <a className='list-group-item  py-2 '>
        <i className="fa-solid fa-keyboard fs-5 me-3"></i>
          <span className='fs-5'>Form</span>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
