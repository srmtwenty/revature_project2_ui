import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


function ItemsPage() {

    const [items, setItems] = useState([]);

    const loadItems = ()=>{
        axios.get('http://localhost:8082/items')
            .then(res => {
                setItems(res.data); 
                console.log(items)
            })
            .catch(err => {
                console.log(err)
            });
        };

    useEffect(() => {

        loadItems();
       
    }, [])

    function Delete(id){
        axios.delete(`http://localhost:8082/items/delete/${id}`)
            .then(res => {
                loadItems();
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }




    return (
    <div className='w-full h-full flex-col px-10 py-8'>

<Link to="add" className='px-3 py-2 text-white bg-green-600 rounded-lg font-semibold'> Add Items</Link>


        <div className="w-full h-full flex-col flex min-h-[50vh] justify-center items-center ">

        <h1  className='text-black text-3xl font-semibold mt-16'> Items page </h1>

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
                Description
              </th>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Price
              </th> 
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Action
              </th>
            </tr>
          </thead >
         {console.log(items)} 
          <tbody>
          {items.map((data, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                {data.id}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.name}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.description}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.price}
              </td>
              
              <td className=" flex space-x-4  whitespace-nowrap justify-center items-center mt-1">
                <Link to={`/items/${data.id}`} className='px-6 py-2 text-white bg-black rounded-lg font-semibold'>View</Link>
                <Link to={`/items/update/${data.id}`} className='px-6 py-2 text-white bg-blue-600 rounded-lg font-semibold'>Edit </Link>
                
                <button onClick={()=>Delete(
                    data.id
                )} className='px-6 py-2 text-white bg-red-600 rounded-lg font-semibold'>Delete</button>
                <Link to={`/items/add`} className='px-6 py-2 text-white bg-blue-600 rounded-lg font-semibold bg-green-600 rounded-lg font-semibold bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300'> Add Items</Link>
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
         
      </div>

     
    </div>
    )}

export default ItemsPage