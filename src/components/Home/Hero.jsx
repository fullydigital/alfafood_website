import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col lg:flex-row h-250 lg:h-300'>
      <div className='bg-black text-white flex flex-col'>
        <div className='mt-32 w-4/6 mx-auto lg:mx-0'>
          <h2 className='text-red-700 lg:w-1/2 text-7xl lg:mr-auto lg:ml-32 mb-8 font-semibold'>Kohlrabi</h2>
          <h3 className='text-4xl lg:text-5xl mb-12 md:mb-20 lg:w-3/4 lg:text-left lg:mr-auto lg:ml-32 font-semibold'>Wir haben alles was Du benötigst</h3>
          <button className='bg-gray-700 w-4/6 lg:w-3/5 mb-12 py-3 lg:ml-16 font-semibold'>Filialen entdecken</button>
        </div>
      </div>
      <div className='invisible lg:visible lg:bg-black lg:basis-3/5 lg:container'>
        <img className='rounded-l-200 h-400 -mt-32 relative object-center mx-auto object-cover' src={require('../../assets/heroImage.jpg')} alt="Filialfoto" />
      </div>
    </div>
  )
}
