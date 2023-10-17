import React from 'react'

export default function Hero() {
  return (
    <>
      <div className='flex flex-col lg:flex-row xl:w-full h-[488px] md:h-[448px] lg:h-300'>
        <div className='bg-black text-white flex flex-col 2xl:w-full xl:text-left'>
          <div className='mt-32 xl:w-full w-4/6 mx-auto 2xl:w-4/6 2xl:mx-auto lg:mx-0'>
            <h2 className='text-red-700 lg:w-1/2 lg:text-5xl lg:text-left text-4xl lg:mr-auto lg:ml-32 mb-8 font-semibold'>Herzlich Willkommen bei Alfafood</h2>
            <h3 className='text-2xl lg:text-4xl mb-12 md:mb-20 lg:w-3/4 lg:text-left lg:mr-auto lg:ml-32 font-semibold'>Wir haben alles was Du benötigst</h3>
            <button className='bg-gray-700 w-4/6 lg:w-3/5 mb-12 py-3 lg:ml-24 xl:ml-32 2xl:w-2/5 font-semibold'>Filialen entdecken</button>
          </div>
        </div>
        <div className='collapse lg:visible bg-black lg:basis-3/5 xl:w-full xl:basis-full lg:container'>
          <img className='rounded-l-200 h-400 bg-black -mt-32 relative object-center mx-auto object-cover' src={require('../../assets/heroImage.jpg')} alt="Filialfoto" />
        </div>
      </div>
    </>
  )
}
