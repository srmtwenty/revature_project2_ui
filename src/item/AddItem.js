import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddItem() {


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    


    const navigate = useNavigate();

    const data = {
        name: name,
        description: description,
        price: price
    }
     
    function Submit(e){
        e.preventDefault();
        axios.post(`http://localhost:8082/items/add`, {
            name: name,
            description: description,
            price: price
        })
        .then(res => {
            console.log(res)
            navigate('/items')
        }
        )
        .catch(err => {
            console.log(err)
        }
        )
    }

        



  return (
    <div className="w-screen h-full   flex flex-col justify-center items-center mt-16">

    
<h1 className='text-blue-500 text-3xl font-semibold flex '>Add Item </h1>
        <form className="'w-[80%] h-full  justify-center items-center mt-4 ml-12"  >
            
        
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            <input value={description}   onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Enter Description" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            <input value={price}  onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Enter Number" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            
        </form>
        <button onClick={Submit} className='px-6 py-2 text-white bg-red-600 rounded-lg font-semibold mt-5'> SUBMIT</button>
    </div>
  );
}

export default AddItem;