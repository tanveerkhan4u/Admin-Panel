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
          <>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Default checkbox
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="flexCheckChecked"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Checked checkbox
              </label>
            </div>
          </>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label class="form-check-label" for="inlineCheckbox1">1</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label class="form-check-label" for="inlineCheckbox2">2</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled />
            <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
          </div>
          <hr />
          <>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Default radio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
          </>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">1</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2">2</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled />
            <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
          </div>
          <hr />
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
              Checked switch checkbox input
            </label>
          </div>

          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled />
            <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled />
            <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
          </div>


        </div>
      </div>
      <div className="row  g-4 justify-content-center mt-3 gap-3">
        <div className="col-md-5 bg-body-secondary p-4">
          <h5 className='mb-3'>Input Group</h5>
          <>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                @example.com
              </span>
            </div>
            <div className="mb-3">
              <label htmlFor="basic-url" className="form-label">
                Your vanity URL
              </label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon3">
                  https://example.com/users/
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3 basic-addon4"
                />
              </div>
              <div className="form-text" id="basic-addon4">
                Example help text goes outside the input group.
              </div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <span className="input-group-text">.00</span>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
              />
              <span className="input-group-text">@</span>
              <input
                type="text"
                className="form-control"
                placeholder="Server"
                aria-label="Server"
              />
            </div>
            <div className="input-group">
              <span className="input-group-text">With textarea</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
                defaultValue={""}
              />
            </div>
          </>


        </div>
        <div className="col-md-5 bg-body-secondary p-4 ">
          <h5 className='mb-3'>Sizing</h5>
          <>
            <input
              className="form-control form-control-lg "
              type="text"
              placeholder=".form-control-lg"
              aria-label=".form-control-lg example"
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Default input"
              aria-label="default input example"
            />
            <input
              className="form-control form-control-sm mt-3"
              type="text"
              placeholder=".form-control-sm"
              aria-label=".form-control-sm example"
            />
          </>


        </div>
      </div>
      <div className="row p-4 bg-body-secondary mt-4  ">
        <div className='col-md-6 text-start'>
          <span className='text-primary fs-5'>© Your Site Name,</span>
          <span className='text ms-2 fs-5'>All Right Reserved.</span>
        </div>
        <div className='col-md-6 text-end'>
        <span className='text fs-5'>Designed By</span>
          <span className='text-primary fs-5 ms-2'>HTML Codex</span>
        </div>

      </div>
    </div>
  )
}

export default Form;







