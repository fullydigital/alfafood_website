import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col lg:flex-row h-250 md:h-300'>
      <div className='basis-3/5 bg-black text-white flex flex-col'>
        <div className='mt-32 w-3/4'>
          <h2 className='text-red-700 w-1/2 text-7xl md:mr-auto mx-auto md:ml-32 mb-8 font-semibold'>Kohlrabi</h2>
          <h3 className='text-4xl md:text-5xl mb-12 md:mb-20 w-3/4 text-left md:mr-auto ml-24 md:ml-32 font-semibold'>Wir haben alles was Du benötigst</h3>
          <button className='bg-gray-700 w-2/5 mb-12 md:py-3 px-28 md:px-0 ml-20 md:ml-auto md:mr-20 font-semibold'>Filialen entdecken</button>
        </div>
      </div>
      <div className='invisible lg:visible md:bg-black md:basis-3/5 md:container'>
        <img className='rounded-l-200 h-400 -mt-32 relative object-center mx-auto object-cover' src={require('../../assets/heroImage.jpg')} alt="Filialfoto" />
      </div>
    </div>
  )
}
