
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function User() {




    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8082/users/${id}`)
            .then(res => {
                setUser(res.data); 
                console.log(user)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }, [])



    const {id} = useParams();
  
  return (
   <div className='w-full h-full justify-center items-center flex'>
    {user && ( 
       
<>
        
<div className="w-[900px] h-[300px] flex px-6 py-4 border border-black mt-16 justify-center items-center">

    <div className="w-5/12 flex flex-col space-y-4">
    <h2 className = 'max-w-sm text-black font semibold font-Inter text-2xl border-b border-black'>First Name</h2>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>Last Name</h2>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>Nickname</h2>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>Description</h2>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>Role</h2>
</div>

<div className = 'w-7/12 flex flex-col space-y-4'>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>{user.firstName}</h2>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>{user.lastName}</h2>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>{user.email}</h2>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>{user.password}</h2>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>{user.role}</h2>
    
</div>
<Link to="/" className = 'text-blue-400 font semibold font-Inter text-2xl ml-12'>Back to Home</Link>
</div>
</>

    )}


    </div>
    
    
    
    )
}


export default User