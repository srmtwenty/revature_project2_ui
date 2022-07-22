import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddEnemy() {


    const [name, setName] = useState("");
    const [health, setHealth] = useState(0);
    const [power, setPower] = useState(0);
    const [specialPower, setSpecialPower] = useState(0);
    const [defense, setDefense] = useState(0);
    const [specialDefense, setSpecialDefense] = useState(0);
    const [description, setDescription] = useState("");
    const [gold, setGold] = useState(0);

    const navigate = useNavigate();

    const data = {
        name: name,
        health: health,
        power:power,
        specialPower:specialPower,
        defense: defense,
        specialDefense:specialDefense,
        description: description,
        gold: gold
    }
     
    function Submit(e){
        e.preventDefault();
        axios.post(`http://localhost:8082/enemies/add`, {
            name: name,
            health: health,
            power:power,
            specialPower:specialPower,
            defense: defense,
            specialDefense: specialDefense,
            description: description,
            gold: gold
        })
        .then(res => {
            console.log(res)
            navigate('/enemies')
        }
        )
        .catch(err => {
            console.log(err)
        }
        )
    }

  return (
    <div className="w-screen h-full   flex flex-col justify-center items-center mt-16">

    
<h1 className='text-blue-500 text-3xl font-semibold flex '>Add Enemy </h1>
        <form className="'w-[80%] h-full  justify-center items-center mt-4 ml-12"  >
            
        
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            <input value={health}   onChange={(e) => setHealth(e.target.value)} type="number" placeholder="Enter Health" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            <input value={power}  onChange={(e) => setPower(e.target.value)} type="number" placeholder="Enter Power" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            <input value={specialPower}  onChange={(e) => setSpecialPower(e.target.value)} type="number" placeholder="Enter Special Power" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            <input value={defense}   onChange={(e) => setDefense(e.target.value)} type="number" placeholder="Enter Defense" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            <input value={specialDefense}  onChange={(e) => setSpecialDefense(e.target.value)} type="number" placeholder="Enter Special Defense" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            <input value={description}   onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Enter Description" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

            <input value={gold}  onChange={(e) => setGold(e.target.value)} type="number" placeholder="Enter Gold" className='w-[80%] bg-white/10 text-xl  font-normal py-6 pl-6  outline-none border border-zinc-400  mt-4' />

        </form>
        <button onClick={Submit} className='px-6 py-2 text-white bg-red-600 rounded-lg font-semibold mt-5'> SUBMIT</button>
    </div>
  );
}

export default AddEnemy;