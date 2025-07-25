
import React, { useContext } from "react";
import { useState } from "react";
import Appcontext from "../context/Appcontext";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const { shippingAddress, userAddress } = useContext(Appcontext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
     fullname:"",
    address:"",
    city:"",
    state:"",
    contury:"",
    pincode:"",
    mobileno:"",
  });
  const onChangerHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const {fullname,
    address,
    city,
    state,
    contury,
    pincode,
    mobileno } =
    formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    // alert("Your form has been submited")

    const result = await shippingAddress(
     fullname,
    address,
    city,
    state,
    contury,
    pincode,
    mobileno,
    );

    console.log("address adedd ",result)
  

    if (result.success) {
      navigate("/checkout");
    }

    setFormData({
     
     fullname:"",
    address:"",
    city:"",
    state:"",
  contury:"",
    pincode:"",
    mobileno:"",
  
    });

     console.log(formData);
    console.log(formData.contury)
 
  };
  return (
    <>
      <div
        className="container my-3 p-4"
        style={{
          border: "2px solid yellow",
          borderRadius: "10px",
        }}
      >
        <h1 className="text-center">Shipping Address</h1>
        <form onSubmit={submitHandler} className="my-3">
          <div className="row">
            <div className="mb-3 col-md-4 ">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                name="fullname"
                value={formData.fullname}
                onChange={onChangerHandler}
                type="text"
                className="form-control bg-dark text-light"
                id="exampleInputEmail13"
                aria-describedby="emailHelp"
              />
            </div>
             <div className="mb-3 col-md-4 ">
              <label htmlFor="exampleInputEmail1" className="form-label">
                country
              </label>
              <input
                name="contury"
                value={formData.contury}
                onChange={onChangerHandler}
                type="text"
                className="form-control bg-dark text-light"
                id="exampleInputEmail13"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                State
              </label>
              <input
                name="state"
                value={formData.state}
                onChange={onChangerHandler}
                type="text"
                className="form-control bg-dark text-light"
                id="exampleInputPassword1"
              />
            </div>
          </div>

          <div className="row">
            <div className="mb-3 col-md-4 ">
              <label htmlFor="exampleInputEmail1" className="form-label">
                City
              </label>
              <input
                name="city"
                value={formData.city}
                onChange={onChangerHandler}
                type="text"
                className="form-control bg-dark text-light"
                id="exampleInputEmail14"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Pincode
              </label>
              <input
                name="pincode"
                value={formData.pincode}
                onChange={onChangerHandler}
                type="number"
                className="form-control bg-dark text-light"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                PhoneNumber
              </label>
              <input
                name="mobileno"
                value={formData.mobileno}
                onChange={onChangerHandler}
                type="number"
                className="form-control bg-dark text-light"
                id="exampleInputPassword1"
              />
            </div>
          </div>

          <div className="row">
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address/Nearby
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={onChangerHandler}
                type="text"
                className="form-control bg-dark text-light"
                id="exampleInputPassword1"
              />
            </div>
          </div>

          <div className="d-grid col-6 mx-auto my-3">
            <button type="submit" className="btn btn-primary" 
            style={{fontWeight:'bold'}}>
              Submit
            </button>
          </div>
        </form>
        {userAddress && (
          <div className="d-grid col-6 mx-auto my-3">
            <button className="btn btn-warning"
            onClick={()=>navigate('/checkout')}
            style={{fontWeight:'bold'}}
            >Use Old Address</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Address;
