import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=' sidebar1 p-2' style={{position: 'fixed'}}>
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
        <Link to='/admin/Table' className='list-group-item  py-2 mb-2'>
        <i className="fa-solid fa-table fs-5 me-3"></i>
          <span className='fs-5'>Table</span>
        </Link>
        <Link to='/admin/Form' className='list-group-item  py-2'>
        <i className="fa-solid fa-keyboard fs-5 me-3"></i>
          <span className='fs-5'>Form</span>
        </Link>
        <Link to='/admin/Add' className='list-group-item mt-2 py-2'>
        <i className="fa-solid fa-keyboard fs-5 me-3"></i>
          <span className='fs-5'>Add Teacher</span>
        </Link>
        <Link to='/admin/ViewTeacher' className='list-group-item mt-2 py-2'>
        <i className="fa-solid fa-keyboard fs-5 me-3"></i>
          <span className='fs-5'>View Teacher</span>
        </Link>
        <Link to='/admin/Addcourse' className='list-group-item mt-2 py-2'>
        <i className="fa-solid fa-keyboard fs-5 me-3"></i>
          <span className='fs-5'>Add Course</span>
        </Link>
        <Link to='/admin/Course' className='list-group-item mt-2 py-2'>
        <i className="fa-solid fa-keyboard fs-5 me-3"></i>
          <span className='fs-5'>View Course</span>
        </Link>
        <Link to='/admin/Addquestion' className='list-group-item mt-2 py-2'>
        <i className="fa-solid fa-keyboard fs-5 me-3"></i>
          <span className='fs-5'>Add Question</span>
        </Link>
        <Link to='/admin/Viewquestion' className='list-group-item mt-2 py-2'>
        <i className="fa-solid fa-keyboard fs-5 me-3"></i>
          <span className='fs-5'>View Question</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
