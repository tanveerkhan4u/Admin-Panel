import React from 'react'

const Table = () => {
  return (
    <div>
      <div className="row  mt-4 gy-4 justify-content-center">
        <div className="col-md-6 bg-body-secondary p-4">
        <h5 className='mb-4'>Basic Table</h5>
        <table class="table">
  <thead>
    <tr >
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


        </div>
        <div className="col-md-5"></div>
      </div>
    </div>
  )
}

export default Table
