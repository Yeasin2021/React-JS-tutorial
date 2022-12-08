import React,{useState} from 'react'

const ImageForms = () => {
const [image,setImage] = useState('');
const data = {image};
// const formData = new FormData();
const inputImage = (e) =>{
    

    console.log(e.target.files[0])
    // console.log(e.target.files[0].name)

    // formData.append('file',e.target.files[0].name);
}
const formSubmit = (e) =>{
    e.preventDefault();
    fetch("http://localhost:8000/post",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response => console.log(response))
    .catch(error=>console.warn("Error: " + error))
}
  return (
    <div>
      <form onSubmit={formSubmit}>
        <div className="form-group" style={{ marginTop:'100px',marginLeft:'100px' }}>
            <label htmlFor="exampleFormControlFile1">Example file input</label>
            <input type="file" className="form-control-file" onChange={(e)=>setImage(e.target.files[0].name)} />
            <input type="submit" className="form-control-file" id="exampleFormControlFile1" value="Submit" />
        </div>
    </form>
    </div>
  )
}

export default ImageForms
