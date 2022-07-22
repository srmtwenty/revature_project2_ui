import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddUser() {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");


    const navigate = useNavigate();

    const data = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        role: role
    }
     
    function Submit(e){
        e.preventDefault();
        axios.post(`http://localhost:8082/users/add`, {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
            role: role
        })
        .then(res => {
            console.log(res)
            navigate('/users')
        }
        )
        .catch(err => {
            console.log(err)
        }
        )
    }

        






  return (
    <div className="w-screen h-full   flex flex-col justify-center items-center mt-16">

    
<h1 className='text-blue-500 text-3xl font-semibold flex '>Add Hero</h1>
        <form className="'w-[80%] h-full  justify-center items-center mt-4 ml-12"  >
            
        
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter First Name" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            <input value={lastName}   onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter Last Name" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            <input value={username}  onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter Nickname" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            <input value={email}  onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Desription" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            <input value={password}  onChange={(e) => setPassword(e.target.value)} type="email" placeholder="Flaw" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            <input value={role}  onChange={(e) => setRole(e.target.value)} type="text" placeholder="Enter role (GOOD or EVIL)" className='w-[80%] bg-white- 10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            
        </form>
        <button onClick={Submit} className='px-6 py-2 text-white bg-red-600 rounded-lg font-semibold mt-5'> SUBMIT</button>
    </div>
  );
}

export default AddUser;