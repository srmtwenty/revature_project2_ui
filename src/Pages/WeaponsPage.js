import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


function WeaponsPage() {

    const [weapons, setWeapons] = useState([]);

    const loadWeapons = ()=>{
        axios.get('http://localhost:8082/weapons')
            .then(res => {
                setWeapons(res.data); 
                console.log(weapons)
            })
            .catch(err => {
                console.log(err)
            });
        };

    useEffect(() => {

        loadWeapons();
       
    }, [])

    function Delete(id){
        axios.delete(`http://localhost:8082/weapons/delete/${id}`)
            .then(res => {
                loadWeapons();
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }




    return (
    <div className='w-full h-full flex-col px-10 py-8'>

<Link to="add" className='px-3 py-2 text-white bg-green-600 rounded-lg font-semibold'> Add Weapons</Link>


        <div className="w-full h-full flex-col flex min-h-[50vh] justify-center items-center ">

        <h1  className='text-black text-3xl font-semibold mt-16'> Weapon page </h1>

        <table className="w-[80%] text-center overflow-hidden overflow-y-scroll mt-8 border border-black">
          <thead className="border-b bg-gray-800">
            <tr>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
               ID
              </th>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Name
              </th>
              
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Power
              </th>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Price
              </th> 
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Description
              </th>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Action
              </th>
            </tr>
          </thead >
         {console.log(weapons)} 
          <tbody>
          {weapons.map((data, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                {data.id}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.name}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.power}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.price}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.description}
              </td>
              
              <td className=" flex space-x-4  whitespace-nowrap justify-center items-center mt-1 ">
                <Link to={`/weapons/${data.id}`} className='px-6 py-2 text-white bg-black rounded-lg font-semibold'>View</Link>
                <Link to={`/weapons/update/${data.id}`} className='px-6 py-2 text-white bg-blue-600 rounded-lg font-semibold'>Edit </Link>
               
                <button onClick={()=>Delete(
                    data.id
                )} className='px-6 py-2 text-white bg-red-600 rounded-lg font-semibold'>Delete</button>
                 <Link to={`/weapons/add`} className='px-6 py-2 text-white bg-blue-600 rounded-lg font-semibold bg-green-600 rounded-lg font-semibold bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300'> Add Weapons</Link>
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
         
      </div>

     
    </div>
    )}

export default WeaponsPage