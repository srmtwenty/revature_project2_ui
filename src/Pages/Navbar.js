import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full h-16 bg-blue-600 flex items-center px-10 py-2 justify-between' >
        <Link to="/" className='text-white text-3xl font-semibold p-4 class="text-violet-500 hover:text-red-700  transition ease-in-out delay-150  duration-700 hover:scale-110 '>Project 2</Link>
        <Link to="/" className='text-white text-3xl font-semibold p-4 class="text-violet-500 hover:text-black  transition ease-in-out delay-150  duration-700 hover:scale-110 '>Home</Link>
        <Link to="/users" className='text-red-500 text-3xl font-semibold class="text-violet-500 hover:text-black  p-4  transition ease-in-out delay-150  duration-700 hover:scale-110 '>Heroes</Link>
        <Link to="/weapons" className='text-white text-3xl font-semibold p-4 class="text-violet-500 hover:text-black  transition ease-in-out delay-150  duration-700 hover:scale-110 '>Weapons</Link>
        <Link to="/items" className='text-white text-3xl font-semibold  p-4 class="text-violet-500 hover:text-black  transition ease-in-out delay-150  duration-700 hover:scale-110 '>Items</Link>
        <Link to="/armors" className='text-white text-3xl font-semibold class="text-violet-500 hover:text-black  p-4  transition ease-in-out delay-150  duration-700 hover:scale-110 '>Armor</Link>
        <Link to="/" className='text-white text-3xl font-semibold class="text-violet-500 hover:text-black  p-4  transition ease-in-out delay-150  duration-700 hover:scale-110'>Docs</Link>
    </div>
  )
}

export default Navbar