import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




function EditUser() {

    const [userId, setUserId] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");


  const navigate = useNavigate();

  const {id} = useParams();



  useEffect(() => {
      axios.get(`http://localhost:8082/users/${id}`)
          .then(res => {
            
              setFirstName(res.data.firstName); 
              setLastName(res.data.lastName);
              setUsername(res.data.username);
              setEmail(res.data.email);
              setPassword(res.data.password);
              setRole(res.data.role);

              
          }
          )
          .catch(err => {
              console.log(err)
          }
          )
  }, [])



  const data = {
    
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: password,
    role: role
}


function Update(e){
    e.preventDefault();
    axios.put(`http://localhost:8082/users/update/${id}`, data)
    .then(navigate('/users'))
}

 


  return (
    <div className="w-screen h-full   flex flex-col justify-center items-center mt-16">

    
    <h1 className='text-blue-500 text-3xl font-semibold flex '>Update User </h1>
            <form className="'w-[80%] h-full  justify-center items-center mt-4 ml-12"  >
                
            
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter First Name" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />
    
                <input value={lastName}   onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter Last Name" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />
    
                <input value={username}  onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter username" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />
    
                <input value={email}  onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter password" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />
    
                <input value={password}  onChange={(e) => setPassword(e.target.value)} type="email" placeholder="Enter email" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />
    
                <input value={role}  onChange={(e) => setRole(e.target.value)} type="text" placeholder="Enter role (ADMIN or PLAYER)" className='w-[80%] bg-white- 10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />
    
                
            </form>
            <button onClick={Update}  className='px-6 py-2 text-white bg-red-600 rounded-lg font-semibold mt-5'> UPDATE</button>
        </div>
  )
}

export default EditUser