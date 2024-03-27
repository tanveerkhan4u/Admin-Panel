import React from 'react'

const Table = () => {
  return (
    <div>
      <div className="row  mt-4 gy-4 justify-content-center gap-3">
        <div className="col-md-5 bg-body-secondary p-4">
          <h5 className='mb-4 '>Basic Table</h5>
          <table class="table">
            <thead>
              <tr >
                <th className='text-secondary' scope="col">#</th>
                <th className='text-secondary' scope="col">First</th>
                <th className='text-secondary' scope="col">Last</th>
                <th className='text-secondary' scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='text-secondary' scope="row">1</th>
                <td className='text-secondary'>Mark</td>
                <td className='text-secondary'>Otto</td>
                <td className='text-secondary'>@mdo</td>
              </tr>
              <tr>
                <th className='text-secondary' scope="row">2</th>
                <td className='text-secondary'>Jacob</td>
                <td className='text-secondary'>Thornton</td>
                <td className='text-secondary'>@fat</td>
              </tr>
              <tr>
                <th className='text-secondary' scope="row">3</th>
                <td className='text-secondary' colspan="2">Larry the Bird</td>
                <td className='text-secondary'>@twitter</td>
              </tr>
            </tbody>
          </table>


        </div>
        <div className="col-md-5 bg-body-secondary p-4">
          <h5 className='mb-4 '>
            Accented Table</h5>
          <table class="table table-striped">
            <thead>
              <tr  >
                <th className='text-secondary' scope="col">#</th>
                <th className='text-secondary' scope="col ">First</th>
                <th className='text-secondary' scope="col">Handle</th>
                <th className='text-secondary' scope="col">Last</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='text-secondary' scope="row">1</th>
                <td className='text-secondary'>Mark</td>
                <td className='text-secondary'>Otto</td>
                <td className='text-secondary'>@mdo</td>
              </tr>
              <tr>
                <th className='text-secondary' scope="row">2</th>
                <td className='text-secondary'>Jacob</td>
                <td className='text-secondary'>Thornton</td>
                <td className='text-secondary'>@fat</td>
              </tr>
              <tr>
                <th className='text-secondary' scope="row">3</th>
                <td className='text-secondary' colspan="2">Larry the Bird</td>
                <td className='text-secondary'>@twitter</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
      <div className="row  mt-4 gy-4 justify-content-center gap-3">
        <div className="col-md-5 bg-body-secondary p-4">
          <h5 className='mb-4 '>Hoverable Table</h5>
          <table class="table table-hover">
            <thead>
              <tr  >
                <th className='text-secondary' scope="col">#</th>
                <th className='text-secondary' scope="col ">First</th>
                <th className='text-secondary' scope="col">Handle</th>
                <th className='text-secondary' scope="col">Last</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='text-secondary' scope="row">1</th>
                <td className='text-secondary'>Mark</td>
                <td className='text-secondary'>Otto</td>
                <td className='text-secondary'>@mdo</td>
              </tr>
              <tr>
                <th className='text-secondary' scope="row">2</th>
                <td className='text-secondary'>Jacob</td>
                <td className='text-secondary'>Thornton</td>
                <td className='text-secondary'>@fat</td>
              </tr>
              <tr>
                <th className='text-secondary' scope="row">3</th>
                <td className='text-secondary' colspan="2">Larry the Bird</td>
                <td className='text-secondary'>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-5 bg-body-secondary p-4">
          <h5 className='mb-4 '>Color Table</h5>
          <table class="table table-dark">
            <thead>
              <tr  >
                <th className='text-white' scope="col">#</th>
                <th className='text-white' scope="col ">First</th>
                <th className='text-white' scope="col">Handle</th>
                <th className='text-white' scope="col">Last</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='text-white' scope="row">1</th>
                <td className='text-white'>Mark</td>
                <td className='text-white'>Otto</td>
                <td className='text-white'>@mdo</td>
              </tr>
              <tr>
                <th className='text-white' scope="row">2</th>
                <td className='text-white'>Jacob</td>
                <td className='text-white'>Thornton</td>
                <td className='text-white'>@fat</td>
              </tr>
              <tr>
                <th className='text-white' scope="row">3</th>
                <td className='text-white' colspan="2">Larry the Bird</td>
                <td className='text-white'>@twitter</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
      <div className="row  mt-4 gy-4 justify-content-center gap-3">
        <div className="col-md-5 bg-body-secondary p-4">
          <h5 className='mb-4 '>Bordered Table</h5>
          <table class="table table-bordered">
            <thead>
              <tr  >
                <th className='text-secondary ' scope="col">#</th>
                <th className='text-secondary ' scope="col ">First</th>
                <th className='text-secondary ' scope="col">Handle</th>
                <th className='text-secondary ' scope="col">Last</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='text-secondary ' scope="row">1</th>
                <td className='text-secondary '>Mark</td>
                <td className='text-secondary '>Otto</td>
                <td className='text-secondary '>@mdo</td>
              </tr>
              <tr>
                <th className='text-secondary ' scope="row">2</th>
                <td className='text-secondary '>Jacob</td>
                <td className='text-secondary '>Thornton</td>
                <td className='text-secondary '>@fat</td>
              </tr>
              <tr>
                <th className='text-secondary' scope="row">3</th>
                <td className='text-secondary' colspan="2">Larry the Bird</td>
                <td className='text-secondary'>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-5 bg-body-secondary p-4">
          <h5 className='mb-4 '>Table Without Border</h5>
          <table className="table  table-borderless  ">
            <thead>
              <tr  >
                <th className='text-secondary bg-body-secondary' scope="col">#</th>
                <th className='text-secondary bg-body-secondary' scope="col ">First</th>
                <th className='text-secondary bg-body-secondary' scope="col">Handle</th>
                <th className='text-secondary bg-body-secondary' scope="col">Last</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='text-secondary bg-body-secondary' scope="row">1</th>
                <td className='text-secondary bg-body-secondary'>Mark</td>
                <td className='text-secondary bg-body-secondary'>Otto</td>
                <td className='text-secondary bg-body-secondary'>@mdo</td>
              </tr>
              <tr>
                <th className='text-secondary bg-body-secondary' scope="row">2</th>
                <td className='text-secondary bg-body-secondary'>Jacob</td>
                <td className='text-secondary bg-body-secondary'>Thornton</td>
                <td className='text-secondary bg-body-secondary'>@fat</td>
              </tr>
              <tr>
                <th className='text-secondary bg-body-secondary' scope="row">3</th>
                <td className='text-secondary bg-body-secondary' colspan="2">Larry the Bird</td>
                <td className='text-secondary bg-body-secondary'>@twitter</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

    </div>
  )
}

export default Table
