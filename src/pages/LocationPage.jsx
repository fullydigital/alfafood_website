import React from 'react'

export default function LocationPage() {
  return (
    <>
      {/* start hero */}
      <div className='flex flex-row w-full'>
        <div className='flex flex-col basis-1/2'>
          <h2 className='text-red-700 font-semibold text-5xl'>Nürnberg</h2>
          <p>Straße + Hausnummer</p>
          <p>Postleitzahl + Ort</p>
          <p>Land</p>
          <p>Telefonnummer</p>
          <p>Email Adresse</p>
        </div>
        <div className='basis-1/2'>
          <img src={require('../assets/aboutHero.jpg')} alt="Filiale" />
        </div>
      </div>
      {/* end hero */}
    </>
  )
}
