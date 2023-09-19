import React from 'react'

export default function Choosing() {
  return (
    <div className='flex flex-row bg-black text-white'>
      <div className='basis-1/3 pl-24 flex flex-col items-start mt-20'>
        <h2 className='text-4xl font-semibold text-left'>Franchise</h2>
        <p className='text-left w-3/4 text-xl mt-10'>Werde Franchise Partner, erfahre mehr über die Partnerschaft</p>
        <button className='bg-gray-400 mt-14 py-3 w-3/5 text-black font-semibold'>Mehr erfahren</button>
      </div>
      <div className='basis-1/3'>
        <img className='-mt-24 z-10 relative' src={require('../../assets/Alfafood Tomate Weiß umrandet.png')} alt="" />
      </div>
      <div className='basis-1/3 mt-20 pr-24 flex flex-col items-end'>
        <h2 className='text-4xl font-semibold text-right'>Angebote</h2>
        <p className='text-xl w-3/4 text-right mt-10'>Werde Franchise Partner, erfahre mehr über die Partnerschaft</p>
        <button className='bg-gray-400 mt-14 py-3 w-3/5 text-black font-semibold'>Mehr erfahren</button>
      </div>
    </div>
  )
}
