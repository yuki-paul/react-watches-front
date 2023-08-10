import React,{useEffect,useState} from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom';

export default function ListOfProduct() {

  const [products, setproducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() =>{
   getProducts()
  },[])

  function getProducts(){
    axios.get(`http://localhost:9901/GetAllProducts`).then((res) =>{
      setproducts(res.data)
      //console.log(data)
     }).catch(err => console.log(err))
  }

  function deleteproduct(id){
    axios.delete(`http://localhost:9901/deleteproduct/${id}`).then((res)=>{
      console.log(res.data)
      getProducts();
    }).catch(err => console.log(err))

  }

  const arr = products.map((product,index) => {
    return (
      <tbody>
      <tr>
        <td>{product.productId}</td>
      <td>{product.productName}</td>
      <td>{product.productPrice}</td>
      <td><button className="btn btn-danger" onClick={()=>deleteproduct(product.productId)}>Delete</button></td>

    </tr>
    </tbody>
    )
  })


  return (
    <div>
        <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Product Id</th>
      <th scope="col">ProductName</th>
      <th scope="col">ProductPrice</th>
      <th scope="col">Operation</th>
    </tr>
  </thead>
  {arr}
</table>

    </div>
  )
}
