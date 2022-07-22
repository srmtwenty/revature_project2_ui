import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function EditWeapon() {

  const [name, setName] = useState("");
  const [power, setPower] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
 


  const navigate = useNavigate();

  const {id} = useParams();



  useEffect(() => {
      axios.get(`http://localhost:8082/weapons/${id}`)
          .then(res => {
              setName(res.data.name); 
              setPower(res.data.power);
              setPrice(res.data.price);
              setDescription(res.data.description);
          }
          )
          .catch(err => {
              console.log(err)
          }
          )
  }, [])



  const data = {
    name: name,
    power: power,
    price: price,
    description: description
}


function Update(e){
    e.preventDefault();
    axios.patch(`http://localhost:8082/weapons/update/${id}`, data)
    .then(navigate('/weapons'))
}

 


  return (
    <div className="w-screen h-full   flex flex-col justify-center items-center mt-16">

    
    <h1 className='text-blue-500 text-3xl font-semibold flex '>Update Weapon </h1>
            <form className="'w-[80%] h-full  justify-center items-center mt-4 ml-12"  >
                
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />
    
                <input value={power}   onChange={(e) => setPower(e.target.value)} type="number" placeholder="Enter Power" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />
    
                <input value={price}  onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Enter Price" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />
    
                <input value={description}   onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Enter Description" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            </form>
            <button onClick={Update}  className='px-6 py-2 text-white bg-red-600 rounded-lg font-semibold mt-5'> UPDATE</button>
        </div>
  )
}

export default EditWeapon