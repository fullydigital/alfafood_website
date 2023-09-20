import React from 'react'

export default function LocationPage() {
  return (
    <>
      {/* start hero */}
      <div className='flex flex-row w-full'>
        <div className='flex flex-col basis-1/2 text-left pl-20 pt-16'>
          <h2 className='text-red-700 font-semibold text-5xl mb-8'>Nürnberg</h2>
          <p className='mb-2'><span className='font-semibold'>Straße:</span> Platenstraße 65</p>
          <p className='mb-2'><span className='font-semibold'>Postleitzahl:</span> 90441 Nürnberg</p>
          <p className='mb-2'><span className='font-semibold'>Bundesland:</span> Deutschland, Bayern</p>
          <p className='mb-2'><span className='font-semibold'>Telefon:</span> 0911 9401970</p>
          <p className='mb-2'><span className='font-semibold'>E-Mail:</span> info@alfafood.eu</p>
        </div>
        <div className='basis-1/2'>
          <img src={require('../assets/aboutHero.jpg')} alt="Filiale" />
        </div>
      </div>
      {/* end hero */}
    </>
  )
}
