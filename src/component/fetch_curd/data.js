import React,{useState,useEffect} from 'react'

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

const [items,setItems] = useState(null);
useEffect(()=>{
    const url = " http://localhost:8000/students";
    fetch(url)
    .then((res)=>{return res.json()})
    .then(data=> setItems(data))
},[])


  return (
    <div style={tables} className="tables">
      <table class="table">
  <thead>
    <tr style={{ textAlign:"center" }}>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
        items && items.map((item,index)=>(
          
            
               <tr style={{ textAlign:"center" }}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <a><button className='btn btn-primary'><i class="bi bi-pencil-square"></i></button></a>
                  <a><button className='btn btn-danger'><i class="bi bi-trash "></i></button></a>
                </td>
            </tr>
          
        
        ))
      }
   
  </tbody>
</table>
    </div>
  )
}

export default Data
