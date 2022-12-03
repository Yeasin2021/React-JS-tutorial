import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";



const FormData = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const navigate = useNavigate();
  // const [id,setId] = useState((_.uniqueId("prefix-")));
  const data = {name,email,phone};

  // useEffect(()=>{
  //   const formHandler = (e) =>{
  //       e.preventDefault();
  //       fetch("http://localhost:8000/students",{
  //       method: "POST",
  //       headers:{
  //         "content-type":"application/json"
  //       },
  //       body: JSON.stringify(data)
  //     })
  //     .catch(error=>{alert(error)})
  //     }
      
  // },[])

  // const idGn = (id) =>{
  //   id = Math.random().toString(36).slice(2);
  // }

  const formHandler = (e) =>{
    e.preventDefault();
    fetch("http://localhost:8000/students",{
    method: "POST",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(data)
  })
  .catch(error=>{alert(error)});
    navigate("/data-table");
  }

  return (
    <div style={{display:"flex",justifyContent:"center", marginTop:"200px", margin:"auto"}}>
      <form onSubmit={formHandler}>
        {/* <input type="hidden"  onChange={()=>{idGn(id)}}/> */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" value={name} name='name' onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Mail</label>
            <input type="text" className="form-control" value={email} name='email' onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
            <input type="text" className="form-control" value={phone} name='phone' onChange={(e)=>setPhone(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default FormData
