import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  // object assign into hooks
    const [input, setInput] = useState(
        {
          name:"",
          email:"",
          phone:""
        }
        );
        // data show on form by id with hooks
        useEffect(()=>{
            const url = `http://localhost:8000/students/${id}`;
            fetch(url)
            .then((res)=>{return res.json()})
            .then(data=> {setInput(data)})
        },[])

        // data update by id
      const update = (e) =>{
        e.preventDefault();
        fetch(`http://localhost:8000/students/${id}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(input)

        })
        .catch(error => {console.log(error)})
         navigate("/data-table");
      }

    return (
        <div style={{display:"flex",justifyContent:"center", marginTop:"200px", margin:"auto"}}>
          <form onSubmit={update}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" style={{ color:'blck' }} className="form-control" name='name' value={input.name} onChange={(e)=> {setInput({...input,[e.target.name]:e.target.value})}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Mail</label>
                <input type="text" className="form-control" name='email' value={input.email}  onChange={(e)=> {setInput({...input,[e.target.name]:e.target.value})}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                <input type="text" className="form-control" name='phone' value={input.phone}  onChange={(e)=> {setInput({...input,[e.target.name]:e.target.value})}}/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
      )
}

export default Edit
