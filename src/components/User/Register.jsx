import React from 'react'
import { useState } from 'react'
import AppContext from '../../context/Appcontext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const {register} = useContext(AppContext);
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
   name:"",
   email:"",
   password:""

  })
   
const onChangerHandler = (e) =>{
  const {name, value} = e.target;
  setformdata({...formdata,[name]:value})

};
 const {name,email,password} = formdata;
const submitHandler = async (e) => { 
 
  e.preventDefault();
const result =  await register(name,email,password);

if(result.success){

  navigate('/login')
}
  //alert("your form has been submitted")
 console.log(formdata)
};

  return (
    <>
    <div className="container my-5 p-4"style={{width:"600px",border:'2px solid yellow',borderRadius:'10px'}}>
      <h1 className='text-center'>User Register</h1>
    <form onSubmit={submitHandler} className='my-3'>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input name="name" value={formdata.name}onChange={onChangerHandler}type="text" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp"/>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">email</label>
    <input name="email" value={formdata.email}  onChange={onChangerHandler} type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name="password" value={formdata.password} onChange={onChangerHandler} type="password" className="form-control" id="exampleInputPassword3"/>
  </div>
  <div className='d-grid col-6 mx-auto my-3'>
   <button type="submit" className="btn btn-primary">Register</button>
  </div>
</form>
    </div>
    
    
    </>  
  )
}

export default Register
