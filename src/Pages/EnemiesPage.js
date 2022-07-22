import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


function EnemiesPage() {

    const [enemies, setEnemies] = useState([]);

    const loadEnemies = ()=>{
        axios.get('http://localhost:8082/enemies')
            .then(res => {
                setEnemies(res.data); 
                console.log(enemies)
            })
            .catch(err => {
                console.log(err)
            });
        };

    useEffect(() => {

        loadEnemies();
       
    }, [])

    function Delete(id){
        axios.delete(`http://localhost:8082/enemies/delete/${id}`)
            .then(res => {
                loadEnemies();
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }




    return (
    <div className='w-full h-full flex-col px-10 py-8'>

<Link to="add" className='px-3 py-2 text-white bg-green-600 rounded-lg font-semibold'> Add Users</Link>


        <div className="w-full h-full flex-col flex min-h-[50vh] justify-center items-center ">

        <h1  className='text-black text-3xl font-semibold mt-16'> Enemy page </h1>

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
                Health
              </th>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Power
              </th>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Special Power
              </th>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Defense
              </th>
              
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Special Defense
              </th>
              
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Description
              </th>
              
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Gold
              </th> 
              
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Action
              </th>
            </tr>
          </thead >
         {console.log(enemies)} 
          <tbody>
          {enemies.map((data, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                {data.id}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.name}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.health}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.power}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.specialPower}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.defense}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.specialDefense}
              </td>
              
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.description}
              </td>
              
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.gold}
              </td>

              <td className=" flex space-x-4  whitespace-nowrap justify-center items-center mt-1">
                <Link to={`/enemies/${data.id}`} className='px-6 py-2 text-white bg-black rounded-lg font-semibold'>View</Link>
                <Link to={`/enemies/update/${data.id}`} className='px-6 py-2 text-white bg-blue-600 rounded-lg font-semibold'>Edit </Link>
                <Link to={`/enemies/add`} className='px-6 py-2 text-white bg-blue-600 rounded-lg font-semibold'> Add Items</Link>
                <button onClick={()=>Delete(
                    data.id
                )} className='px-6 py-2 text-white bg-red-600 rounded-lg font-semibold'>Delete</button>
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
         
      </div>

     
    </div>
    )}

export default EnemiesPage