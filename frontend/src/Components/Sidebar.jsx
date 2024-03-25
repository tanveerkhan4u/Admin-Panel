import React from 'react'



const Sidebar = () => {
  return (
    <div className='bg-white sidebar'>
      <div>
        <i className=''> </i>
        <span className='brand-name fs-4'>Tanveer Khan</span>
      </div>
      <hr className='text-dark'/>
      <div className="list-group list-group-flush">
        <a className='list-group-item  my-2'>
        <i className="fa-solid fa-gauge-high fs-5 me-2"></i>
          <span className='fs-5'>Dashboard</span>
        </a>
        <a className='list-group-item py-2'>
        <i className="fa-solid fa-keyboard fs-5 me-2 "></i>
        <span className='fs-5'>Forms</span>
        </a>
        <a className='list-group-item py-2'>
        <i className="fa-solid fa-table fs-5 me-2 "></i>
        <span className='fs-5'>Tables</span>
        </a>


      </div>
      
    </div>
  )
}

export default Sidebar;
