import React from 'react'

const Navbar = ({ Toggle }) => {
  return (
    <div className='mb-5'>
      <nav className="navbar navbar-white navbar-expand-lg bg-body-secondary px-4 fixed-top">
        <div className="container-fluid">
          <i className="fa-solid fa-bars bor fs-5 " onClick={Toggle}>
          </i>
          <form className="d-flex " role="search">
            <input
              className="form-control  ms-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        <div className='cole'>
              <i className="fa-solid fa-bell ms-5 fs-5 "></i>
              <span className='ms-2'>Notification</span> 
              <i className="fa-solid fa-envelope ms-5 fs-5"></i>
              <span className='ms-2'>Message</span>
            </div> 
             
            
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown d-flex ">

                <img src='https://themewagon.github.io/dashmin/img/user.jpg' className='rounded-circle  ' alt='' />
                <a
                  className="nav-link dropdown-toggle  fs-5 "

                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  John Doe
                </a>
                <ul className="dropdown-menu bg-body-secondary" >
                  <li >
                    <a className="dropdown-item" href="#" >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>

                  </li>
                  <li >
                    <a className="dropdown-item" href="#">
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>

            </ul>

          </div>
        </div>
      </nav>

    </div>
//     <div >
//       <nav className="navbar bg-body-tertiary fixed-top">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">
//       Offcanvas navbar
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="offcanvas"
//       data-bs-target="#offcanvasNavbar"
//       aria-controls="offcanvasNavbar"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div
//       className="offcanvas offcanvas-end"
//       tabIndex={-1}
//       id="offcanvasNavbar"
//       aria-labelledby="offcanvasNavbarLabel"
//     >
//       <div className="offcanvas-header">
//         <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
//           Offcanvas
//         </h5>
//         <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="offcanvas"
//           aria-label="Close"
//         />
//       </div>
//       <div className="offcanvas-body">
//         <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="#">
//               Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Link
//             </a>
//           </li>
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               role="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               Dropdown
//             </a>
//             <ul className="dropdown-menu">
//               <li>
//                 <a className="dropdown-item" href="#">
//                   Action
//                 </a>
//               </li>
//               <li>
//                 <a className="dropdown-item" href="#">
//                   Another action
//                 </a>
//               </li>
//               <li>
//                 <hr className="dropdown-divider" />
//               </li>
//               <li>
//                 <a className="dropdown-item" href="#">
//                   Something else here
//                 </a>
//               </li>
//             </ul>
//           </li>
//         </ul>
//         <form className="d-flex mt-3" role="search">
//           <input
//             className="form-control me-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//           <button className="btn btn-outline-success" type="submit">
//             Search
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// </nav>

//     </div>
  )
}

export default Navbar;
