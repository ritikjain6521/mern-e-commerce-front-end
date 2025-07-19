import React ,{useEffect,useState} from 'react';
import Appcontext from './Appcontext';
import axios from 'axios'
import { ToastContainer, toast,Bounce } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


const Appstate = (props) => {

//const url = "http://localhost:1000/api"
 const url = "https://mern-e-commerceproject-1.onrender.com/api"
    const [products, setproduct] = useState([])
    const [token, settoken] = useState([])
    const [IsAuthenticated, setIsAuthenticated] = useState([false])
    const [filterdata, setfilterdata] = useState([]);
    const [user, setuser] = useState();
    const [cart,setcart] =useState([]);
    const [reload,setreload] =useState([false]);
     const [userAddress,setuserAddress] =useState([]);
       const [userOrder,setuserOrder] =useState([]);


    useEffect(()=>{
        const fecthProduct = async()=>{

            const api = await axios.get(`${url}/product/all`,{

          headers:{
            "Content-Type":"Application/json"

          },
         withCredentials:true

            })
        console.log(api);
        setproduct(api.data.products)
        setfilterdata(api.data.products)
        Profile();
        
        }
    
        fecthProduct();
        userCart();
        getAddress();
        user_Order();


    },[token,reload] );

    useEffect(()=>{
      

  let lstoken =localStorage.getItem("token");

   if(lstoken) {

  settoken(lstoken);
  setIsAuthenticated(true);


   }   
  }
,[] );

// register user

  const register = async(name,email,password)=>{

      const api = await axios.post(`${url}/user/register`,{name,email,password},{

    headers:{
      "Content-Type":"Application/json",

    },
   withCredentials:true

      }
    );
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
    return api.data;
      //alert(api.data.message)
  };
  
  // login user


  const  Login = async(email,password)=>{

    const api = await axios.post(`${url}/user/login`,{email,password},{

  headers:{
    "Content-Type":"Application/json",

  },
 withCredentials:true

    }
  );
  toast.success(api.data.message, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });
    console.log("user login",api.data)
    settoken(api.data.token)
    setIsAuthenticated(true)
    localStorage.setItem('token',api.data.token)
  return api.data;
  
    //alert(api.data.message)
};

const Logout = async () =>{
 setIsAuthenticated(false)
settoken("")
localStorage.removeItem('token');
toast.success("Logout successfully", {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
  });



}
// user profile

const Profile = async()=>{

  const api = await axios.get(`${url}/user/profile`,{

headers:{
  "Content-Type":"Application/json",
  "Auth":token

},
withCredentials:true

  })
  setuser(api.data.user)

//console.log(api.data)
}

// add to cart
const Addtocart = async(productId,title,price,qty,imgSrc)=>{

  const api = await axios.post(`${url}/cart/add`,{productId,title,price,qty,imgSrc},{

headers:{
  "Content-Type":"Application/json",
  Auth:token,

},
withCredentials:true

  })

  setreload(!reload);
  toast.success(api.data.message, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });

//console.log("my cart", api);
setcart(api.data.cart)


};
// remove qty
const decreaseqty = async(productId,qty)=>{

  const api = await axios.post(`${url}/cart/--qty`,{productId,qty},{

headers:{
  "Content-Type":"Application/json",
  "Auth":token,

},
withCredentials:true

  })
  
  setreload(!reload);
  console.log("itme decrese",api);

  toast.success(api.data.message, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });

//console.log(api.data)
}
// usercart
const userCart = async()=>{

  const api = await axios.get(`${url}/cart/user`,{

headers:{
  "Content-Type":"Application/json",
  Auth:token,

},
withCredentials:true


  });
  
  
  setcart(api.data.cart);

  

//console.log("my cart", api);


};

const removeformcart = async(productId)=>{

  const api = await axios.delete(`${url}/cart/remove/${productId}`,{

headers:{
  "Content-Type":"Application/json",
  "Auth":token,

},
withCredentials:true

  })
  
  setreload(!reload);
  console.log("remove item form cart",api);

  toast.success(api.data.message, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });

console.log(api.data)
}
const clearcart = async()=>{

  const api = await axios.delete(`${url}/cart/clear`,{

headers:{
  "Content-Type":"Application/json",
  "Auth":token,

},
withCredentials:true

  })
  
  setreload(!reload);
  console.log("remove item form cart",api);

  toast.success(api.data.message, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });

console.log(api.data)
}
const shippingAddress = async(fullname,address,city,state,contury,pincode,mobileno)=> {

  const api = await axios.post(`${url}/address/add`,{fullname,address,city,state,contury,pincode,mobileno},{

headers:{
  "Content-Type":"Application/json",
  "Auth":token,

},
withCredentials:true

  })
  
  setreload(!reload);
  console.log("remove item form cart",api);

  toast.success(api.data.message, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });

   return api.data
}
 const getAddress = async()=>{

            const api = await axios.get(`${url}/address/get`,{

          headers:{
            "Content-Type":"Application/json",
            Auth:token

          },
         withCredentials:true

            })
       console.log("user Address", api.data);
       
        setuserAddress(api.data.userAddress)
       
      
}
 const user_Order = async()=>{

            const api = await axios.get(`${url}/payment/userorder`,{

          headers:{
            "Content-Type":"Application/json",
            Auth:token

          },
         withCredentials:true

            })
       //console.log("user order", api.data);
       
  setuserOrder(api.data)
       
      
}
console.log("user order=",userOrder)


  return (
    <Appcontext.Provider value={{products,register,Login,IsAuthenticated,setIsAuthenticated,url,token,filterdata,setfilterdata,Logout,setuser,user,Addtocart,cart,decreaseqty,removeformcart,shippingAddress,userAddress,clearcart,userOrder}}>{props.children}</Appcontext.Provider>
  )
}

export default Appstate;
