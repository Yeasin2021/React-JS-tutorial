import React from 'react'

const ImageForms = () => {
const formData = new FormData();

  return (
    <div>
      <form>
        <div className="form-group" style={{ marginTop:'100px',marginLeft:'100px' }}>
            <label for="exampleFormControlFile1">Example file input</label>
            <input type="file" className="form-control-file" id="exampleFormControlFile1" />
            <input type="submit" className="form-control-file" id="exampleFormControlFile1" value="Submit" />
        </div>
    </form>
    </div>
  )
}

export default ImageForms
