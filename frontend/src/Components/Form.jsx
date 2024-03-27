import React from 'react'
import { Link, NavLink } from 'react-router-dom'




const Form = () => {
  return (
    <div>

      <div className="row mt-4 gy-4 justify-content-center">
        <div className="col-md-5 ">
          <form className='bg-body-secondary p-4'>
            <div className="mb-3 ">
              <h5 className='mb-4'>Basic Form</h5>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>

        </div>
        <div className="col-md-5 ">
          <form className='bg-body-secondary p-4'>
            <h5 className='mb-3'>Horizontal Form</h5>
            <div className="row mb-3 ">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" />
              </div>
            </div>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    defaultValue="option1"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    First radio
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Second radio
                  </label>
                </div>

              </div>
            </fieldset>
            <div className="row mb-3 d-flex ">

              <div className="col-sm-10 offset-sm-2 mt-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck1" />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Check me out
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>

        </div>
      </div>
      <div className='row g-4 justify-content-center mt-3 gap-3'>
        <div className="col-md-5 bg-body-secondary p-4 ">
          <h5 className='mb-3'>Floating Label</h5>
          <>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </>
          <div className="form-floating mt-3">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected="">Open this select menu</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
            <label htmlFor="floatingSelect">Works with selects</label>
          </div>
          <div className="form-floating mt-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: 100 }}
              defaultValue={""}
            />
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
        </div>
        <div className="col-md-5 bg-body-secondary p-4 ">
          <>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="mb-3">
              <label htmlFor="formFileMultiple" className="form-label">
                Multiple files input example
              </label>
              <input
                className="form-control"
                type="file"
                id="formFileMultiple"
                multiple=""
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFileDisabled" className="form-label">
                Disabled file input example
              </label>
              <input
                className="form-control"
                type="file"
                id="formFileDisabled"
                disabled=""
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFileSm" className="form-label">
                Small file input example
              </label>
              <input
                className="form-control form-control-sm"
                id="formFileSm"
                type="file"
              />
            </div>
            <div>
              <label htmlFor="formFileLg" className="form-label">
                Large file input example
              </label>
              <input
                className="form-control form-control-lg"
                id="formFileLg"
                type="file"
              />
            </div>
          </>

        </div>
      </div>
      <div className="row g-4 justify-content-center mt-3 gap-3">
        <div className="col-md-5  bg-body-secondary p-4">
          <h5 className='mb-3'>Select</h5>
          <>
            <select
              className="form-select form-select-sm"
              aria-label="Small select example"
            >
              <option selected="">Open this select menu</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
            <select className="form-select mt-3" aria-label="Default select example">
              <option selected="">Open this select menu</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
            <select
              className="form-select form-select-lg mb-3 mt-3"
              aria-label="Large select example"
            >
              <option selected="">Open this select menu</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </>
          <select className="form-select" size={3} aria-label="Size 3 select example">
            <option selected="">Open this select menu</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>
        <div className="col-md-5 bg-body-secondary p-4">
        <h5 className='mb-3'>Check, Radio & Switch</h5>

        </div>





      </div>

    </div>
  )
}

export default Form;
