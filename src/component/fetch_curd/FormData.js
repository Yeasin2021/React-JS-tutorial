import React from 'react'

const FormData = () => {
  return (
    <div style={{display:"flex",justifyContent:"center", marginTop:"200px", margin:"auto"}}>
      <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Mail</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default FormData
