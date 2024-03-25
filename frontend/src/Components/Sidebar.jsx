import React from 'react'



const Sidebar = () => {
  return (
    <div className='bg-white sidebar p-2'>
      <div>
        <img src='https://themewagon.github.io/dashmin/img/user.jpg'  className='mx-auto rounded-5 me-3' alt='' />
        <span className='brand-name fs-4'>Admin</span>
      </div>
      <hr className='text-dark'/>
      <div className="list-group list-group-flush my-1">
        <a className='list-group-item'>
        <i className="fa-solid fa-gauge-high fs-5 me-3"></i>
          <span className='fs-5'>Dashboard</span>
        </a>
        <a className='list-group-item py-2 my-1'>
        <i className="fa-solid fa-keyboard fs-5 me-3 "></i>
        <span className='fs-5'>Forms</span>
        </a>
        <a className='list-group-item py-2 my-1'>
        <i className="fa-solid fa-table fs-5 me-3 "></i>
        <span className='fs-5'>Tables</span>
        </a>


      </div>
      
    </div>
  )
}

export default Sidebar;
