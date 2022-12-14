import React,{useState,useEffect} from 'react'
import { Link,useParams } from "react-router-dom";


const Data = () => {
// adding css style 
const tables = {
    display: "flex",
    justifyContent: "center",
    background:"white",
    width:"80%",
    height:"100%",
    margin:"0 auto",
    marginTop:"50px"
}

// data show on table by hooks
const [items,setItems] = useState(null);
useEffect(()=>{
    const url = " http://localhost:8000/students";
    fetch(url)
    .then((res)=>{return res.json()})
    .then(data=> setItems(data))
},[])

// data delete by id and use useParams hooks
const {id} = useParams();
const deleteData = (id) =>{
  const action = window.confirm("Do You Want This Item ? ");
  if(action){
    const url = `http://localhost:8000/students/${id}`;
    fetch(url,{method:"DELETE"}).catch(error=>console.log(error));
    // data filtering and show data without delete data
    const newItems = items.filter((item)=>{
      return item.id !== id;
    });
    setItems(newItems);
  }
  
}

  return (
    <div style={tables} className="tables">
      <table class="table">
  <thead>
    <tr><button style={{ backgroundColor:"blue" }}><Link to="/form" style={{ textDecoration:"none",color:"white" }}>Create</Link></button></tr>
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
                  <Link to={`/form-edit/${item.id}`}><button className='btn btn-primary'><i class="bi bi-pencil-square"></i></button></Link>
                  <button onClick={()=>deleteData(item.id)} className='btn btn-danger' style={{ marginLeft:'10px' }}><i class="bi bi-trash"></i></button>
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
