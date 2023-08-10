import React,{useEffect,useState} from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom';

export default function ListOfcoupon() {

  const [coupons, setcoupons] = useState([]);
  const navigate = useNavigate();
  useEffect(() =>{
   getcoupons()
  },[])

  function getcoupons(){
    axios.get(`http://localhost:9901/GetAllCoupon`).then((res) =>{
      setcoupons(res.data)
      //console.log(data)
     }).catch(err => console.log(err))
  }

  function deletecoupon(id){
    axios.delete(`http://localhost:9901/deleteCoupon/${id}`).then((res)=>{
      console.log(res.data)
      getcoupons();
    }).catch(err => console.log(err))

  }

  const arr = coupons.map((coupon,index) => {
    return (
      <tbody>
      <tr>
        <td>{coupon.id}</td>
      <td>{coupon.couponCode}</td>
      <td>{coupon.couponDiscount}</td>
      <td><button className="btn btn-danger" onClick={()=>deletecoupon(coupon.id)}>Delete</button></td>

    </tr>
    </tbody>
    )
  })


  return (
    <div>
        <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">coupon Id</th>
      <th scope="col">coupon Code</th>
      <th scope="col">coupon Discount</th>
      <th scope="col">Operations</th>
    </tr>
  </thead>
  {arr}
</table>

    </div>
  )
}
