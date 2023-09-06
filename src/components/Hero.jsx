import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-row h-300'>
      <div className='basis-3/5 bg-black text-white flex flex-col'>
        <h2 className='text-red-700 text-7xl'>Kohlrabi</h2>
        <h3>Wir haben alles was Du benötigst</h3>
        <button className='bg-gray-700'>Filialen entdecken</button>
      </div>
      <div className='bg-black'>
        <img className='rounded-l-200 h-300' src={require('../assets/heroImage.jpg')} alt="Filialfot" />
      </div>
    </div>
  )
}
