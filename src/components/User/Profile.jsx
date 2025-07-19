import React from 'react'
import Appcontext from '../../context/Appcontext'
import { useContext } from 'react'



const Profile = () => {
    const {user} = useContext(Appcontext)

    
    
  return (
    <>
    <div className="contanier text-center my-5">

        <h1>Welcome {user?.name}</h1>
        <h3>{user?.email}</h3>
    </div>
    
    
    </>
  )
}

export default Profile
