import React, { useContext } from 'react'
import Appcontext from '../../context/Appcontext'
import { useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import { useState } from 'react'


const Searchproduct = () => {
    const { products} = useContext(Appcontext)
    const [Searchproduct, setSearchproduct]= useState([])
    const{term} = useParams()

    useEffect(() =>{
      setSearchproduct(products?.filter((data)=>data?.title?.toLowerCase().includes(term.toLowerCase()))

    );
    },[term,products]);
  return (
  <>
  <div className='contanier text-center'>
  
  <div className="container d-flex justify-content-center align-items-center">  
    <div className="row container d-flex justify-content-center align-items-center my-5">
    {Searchproduct?.map((products)=>
    <div key={products._id} className="container my-3 col-md-4 d-flex justify-content-center align-items-center">
    <div className="card bg-dark text-light text-center" style={{width: '18rem'}} >

      <Link to={`/product/${products._id}`} className='d-flex justify-content-center align-items-center p3'>

      <img src={products.imgSrc} className="card-img-top" alt ="..." style={{width:'200px',height:'200px',borderRadius:'10px',border:'2px solid yellow'}}/>
</Link>

  <div className="card-body">
    <h5 className="card-title">{products.title}</h5>

    <div className='my-3'>

    <button className="btn btn-primary mx-3">

     {products.price} {""} {"$"}
 </button>
 <button className="btn btn-warning">

   Add to Cart
</button>
</div>
  </div>
</div>
</div>
)}
</div>
 </div>





  </div>
  
  
  


  </>
  )
  
}

export default Searchproduct;
