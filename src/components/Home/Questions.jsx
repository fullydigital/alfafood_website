import React from 'react'
import { NavLink } from "react-router-dom";

export default function Questions() {
  return (
    <div className='flex flex-col mt-12 md:mt-20 items-center mb-20'>
      <h3 className='text-4xl w-4/5 lg:w-full md:text-5xl lg:text-6xl font-semibold'>Werde Lieferant!</h3>
      <button className='bg-red-700 text-white md:w-3/12 w-2/4 py-4 text-xl font-semibold mt-12 md:mt-16'><NavLink to="/Lieferant">Kontaktiere uns</NavLink></button>
    </div>
  )
}
