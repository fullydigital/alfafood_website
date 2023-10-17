import React from 'react'
import {NavLink} from "react-router-dom";

export default function Choosing() {
  return (
    <div className='flex flex-col lg:flex-row bg-black text-white'>
      <div className='lg:basis-1/3 lg:w-5/6 w-4/6 mx-auto lg:pl-24 flex flex-col items-start mt-20 mb-16 lg:mb-0'>
        <h2 className='text-4xl mx-auto lg:mx-0 font-semibold lg:text-left'>Franchise</h2>
        <p className='lg:text-left mx-auto lg:mx-0 w-3/4 text-xl mt-10'>Werde Franchise Partner, erfahre mehr über die Partnerschaft</p>
        <button className='bg-gray-400 mx-auto lg:mx-0 mt-14 py-3 w-3/5 text-black font-semibold'><NavLink to="/franchise">Mehr erfahren</NavLink></button>
      </div>
      <div className='mx-auto'>
        <img className='lg:-mt-24 w-64 lg:w-225 z-10 relative' src={require('../../assets/Alfafood Tomate Weiß umrandet.png')} alt="" />
      </div>
      <div className='lg:basis-1/3 mx-auto w-4/6 mt-20 lg:pr-24 flex flex-col items-end'>
        <h2 className='text-4xl mx-auto lg:mx-0 font-semibold lg:text-right'>Angebote</h2>
        <p className='text-xl mx-auto w-3/4 lg:mx-0 lg:text-right mt-10'>Werde Franchise Partner, erfahre mehr über die Partnerschaft</p>
        <button className='bg-gray-400 mx-auto lg:mx-0 mb-16 mt-14 py-3 w-3/5 text-black font-semibold'><NavLink to="/offers">Mehr erfahren</NavLink></button>
      </div>
    </div>
  )
}
