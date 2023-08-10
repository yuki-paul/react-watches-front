import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Login from './Components/LoginAndSIgnup/login';
import Register from './Components/LoginAndSIgnup/Register';
import Admin from './Components/adminpage/Admin';
import Addproduct from './Components/addproduct&addcoupon/Addproduct';
import Addcoupon from './Components/addproduct&addcoupon/Addcoupon';
import Admin_register from './Components/adminpage/Admin_register';
import Addevent from './Components/addproduct&addcoupon/Addevent';
import Addproductcategory from './Components/addproduct&addcoupon/Addproductcategory';
import Getuserpage from './Components/Getpage/Getuserpage';
import Navbar from './Components/Navbar';
import Mycart from './Components/order&cart/mycart';
import Checkout from './Components/order&cart/Checkout';
import Myorder from './Components/order&cart/myorder';
import Navigator from './Components/adminpage/Navigator';
import Header from './Components/adminpage/Header';
import ListOfProduct from './Components/Admin lists/ListOfProduct';
import Listofcoupon from './Components/Admin lists/Listofcoupon';

function App() {

  const role = localStorage.getItem("role")
  
  return (
    <div>
      { role !== "1" ? 
      <>
        <Navbar/>
        <br/>
        <Routes>
              <Route  exact path={"/Login"} element={<Login/>}/>
              <Route  exact path={"/Register"} element={<Register/>}/>
              <Route exact path={"/GetAllProducts"} element={<Getuserpage/>}/>
              <Route exact path={"/myCart"} element={<Mycart/>}/>
              <Route exact path={"/Checkout/:productid"} element={<Checkout/>}/>
              {/* <Route  exact path={"/AdminRegister"} element={<Admin_register/>}/> */}
              <Route exact path={"/myOrders"} element={<Myorder/>}/>
        </Routes>
      </>  :
      <> 
        <Routes>
            <Route  exact path={"/Login"} element={<Login/>}/>
            <Route exact path={"/Admin"} element={<Admin/>}/>
            <Route exact path={"/Addproduct"} element={<Addproduct/>}/>
            <Route exact path={"/Addproduct/:productId"} element={<Addproduct/>}/>
            <Route exact path={"/Addcoupon"} element={<Addcoupon/>}/>
            <Route exact path={"/Addevent"} element={<Addevent/>}/>
            <Route  exact path={"/AdminRegister"} element={<Admin_register/>}/>
            <Route  exact path={"/Addproductcategory"} element={<Addproductcategory/>}/>
            <Route exact path={"/GetAllProducts"} element={<Getuserpage/>}/>
            <Route exact path={"/ListOfProduct"} element ={<ListOfProduct/>}/>
            <Route exact path={"/Listofcoupon"} element ={<Listofcoupon/>}/>
        </Routes>
      </>
    }
          

    </div>
    
  );
}

export default App;
