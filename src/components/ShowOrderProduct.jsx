import React,{useContext,useEffect,useState} from 'react'
import Appcontext from '../context/Appcontext';


const TableProduct = ({items})=>{
   
 const [qty, setqty] = useState(0);
 const [price, setprice] = useState(0);
useEffect(() => {

  let qty = 0;
  let price = 0;
  if(items){
   for(let  i=0; i<items?.length; i++){
     
     qty += items[i].qty
     price +=items[i].price

    
    

   }

  setprice(price)
  setqty(qty)
   


  }





 }, [items] )
  
  return (
    <>
    <table className="table table-bordered border-primary text-center">
  <thead>
    <tr>
      <th scope="col"className='bg-dark text-light'>Product Img</th>
      <th scope="col"className='bg-dark text-light'>Title</th>
      <th scope="col"className='bg-dark text-light'> Price</th>
      <th scope="col"className='bg-dark text-light'>Qty</th>
     
    </tr>
  </thead>
  <tbody>
      {items?.map((products)=> (
      <tr key={products._id}>
      <th scope="row "className='bg-dark text-light'>
        
        <img src={products.imgSrc} style={{width:'50px',hight:'50px'}} />
        
        </th> 
      <td className='bg-dark text-light'>{products.title}</td>
      <td className='bg-dark text-light'>{products.price}</td>
      <td className='bg-dark text-light'>{products.qty}</td>
        
      
           
    </tr>
))}
      <tr>
      <th scope="row "className='bg-dark text-light'>
        
       
        
        </th> 
      <td className='bg-dark text-light'><button className='btn btn-primary'style={{fontWeight:'bold'}}>Total</button></td>
      <td className='bg-dark text-light'><button className='btn btn-warning'style={{fontWeight:'bold'}}>{price}</button></td>
      <td className='bg-dark text-light'><button className='btn btn-info'style={{fontWeight:'bold'}}>{qty}</button></td>
       
    </tr>
  
  </tbody>
</table>
    
    
    
    
    
     </>
  )
}

export default TableProduct