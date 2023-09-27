import React from 'react'

export default function Choosing() {
  return (
    <div className='flex flex-col md:flex-row bg-black text-white'>
      <div className='md:basis-1/3 md:w-5/6 w-4/6 mx-auto md:pl-24 flex flex-col items-start mt-20 mb-16 md:mb-0'>
        <h2 className='text-4xl mx-auto font-semibold md:text-left'>Franchise</h2>
        <p className='md:text-left mx-auto w-3/4 text-xl mt-10'>Werde Franchise Partner, erfahre mehr über die Partnerschaft</p>
        <button className='bg-gray-400 mx-auto mt-14 py-3 w-3/5 text-black font-semibold'>Mehr erfahren</button>
      </div>
      <div className='mx-auto md:basis-1/3'>
        <img className='md:-mt-24 w-64 z-10 relative' src={require('../../assets/Alfafood Tomate Weiß umrandet.png')} alt="" />
      </div>
      <div className='md:basis-1/3 mx-auto w-4/6 mt-20 md:pr-24 flex flex-col items-end'>
        <h2 className='text-4xl mx-auto font-semibold md:text-right'>Angebote</h2>
        <p className='text-xl mx-auto w-3/4 md:text-right mt-10'>Werde Franchise Partner, erfahre mehr über die Partnerschaft</p>
        <button className='bg-gray-400 mx-auto mb-16 mt-14 py-3 w-3/5 text-black font-semibold'>Mehr erfahren</button>
      </div>
    </div>
  )
}
