import React from 'react'

const Data = () => {
const tables = {
    display: "flex",
    justifyContent: "center",
    background:"white",
    width:"80%",
    height:"100%",
    margin:"0 auto",
    marginTop:"50px"
}
  return (
    <div style={tables} className="tables">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto@mail.com</td>
      <td>01457890</td>
      <td>
        <a><button className='btn btn-primary'><i class="bi bi-pencil-square"></i></button></a>
        <a><button className='btn btn-danger'><i class="bi bi-trash "></i></button></a>
      </td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Data
