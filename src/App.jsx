import React, { useContext } from "react";
import Showproduct from './components/product/Showproduct'
import  {BrowserRouter  as Router, Routes,Route} from 'react-router-dom'
import Details from './components/product/Details'
import Navbar from './components/Navbar'
import Searchproduct from './components/product/Searchproduct'
import Register from './components/User/Register'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/User/Login'
import Profile from './components/User/Profile'
import Cart from './components/Cart'
import Address from "./components/Address";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation.jsx";







 



const App =() => {
 //const {} = useContext (Appcontext)  
  return (
    <Router
    >
      
      <Navbar/>
      <ToastContainer />
      
      <Routes>
        <Route path="/" element={<Showproduct />} />
      <Route path="/product/:id" element={<Details />} />
      <Route path="/product/search/:term" element={<Searchproduct />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path='/Profile' element={<Profile/>} />    
      <Route path='/cart' element={<Cart/>} /> 
      <Route path='/Address' element={<Address/>} />
       <Route path='/Checkout' element={<Checkout/>} />
         <Route path='/orderconfirmation' element={<OrderConfirmation/>} />
      
        </Routes>
        </Router>

  
    
    
  );
};

export default App
