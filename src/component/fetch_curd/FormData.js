import React,{useState,useEffect} from 'react'



const FormData = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
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

  const formHandler = (e) =>{
    e.preventDefault();
    fetch("http://localhost:8000/students",{
    method: "POST",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(data)
  })
  .catch(error=>{alert(error)})
  }

  return (
    <div style={{display:"flex",justifyContent:"center", marginTop:"200px", margin:"auto"}}>
      <form onSubmit={formHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Mail</label>
            <input type="text" className="form-control" name='email' onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
            <input type="text" className="form-control" name='phone' onChange={(e)=>setPhone(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default FormData
