import React from 'react'
import { Carousel } from 'flowbite-react';

export default function OffersPage({offers}) {

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="p-6 lg:basis-1/2">
          <Carousel className='h-250 md:w-1/2 mx-auto xl:h-400' slideInterval={3000}>
            {offers.offersCollection.items.map((item) => {
              return (
                <img src={item.url} alt="" />
              )
            })}
          </Carousel>
        </div>
        <div className="flex flex-col py-8 justify-center w-10/12 mx-auto text-left lg:basis-1/2">
            <div className="lg:w-10/12 lg:mx-auto">
            <h2 className="text-2xl font-semibold mb-6 lg:text-4xl">Unsere Angebote der Woche</h2>
            <h3 className="mb-6 lg:text-xl">{offers.headline}</h3>
            <p className="mb-6 text-red-700 font-bold lg:text-xl">{offers.validity}</p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col bg-gray-200 lg:flex-row'>
        <div className='lg:basis-1/2 pt-8 lg:pt-0 lg:my-auto'>
          <h2 className='text-3xl font-semibold xl:pb-6'>Angebote auch in unserer <span className='text-alfafood-green underline'>App</span> entdecken</h2>
          <ul className='mt-6 mb-10'>
            <section className='flex-row flex w-4/6 md:w-3/6 md:justify-center mx-auto mb-4'>
              <img src={require('../assets/Alfafood_Tomate.png')} alt="Tomate" className='h-10 md:-ml-12 xl:-ml-14' />
              <li className='my-auto pl-12'>QR-Code Scannen</li>
            </section>
            <section className='flex-row flex w-4/6 justify-center mx-auto mb-4'>
              <img src={require('../assets/Alfafood_Tomate.png')} alt="Tomate" className='h-10 justify-start' />
              <li className='my-auto pl-4 md:pl-6 xl:pl-8'>Registrieren oder Anmelden</li>
            </section>
            <section className='flex-row flex w-4/6 md:justify-center mx-auto'>
              <img src={require('../assets/Alfafood_Tomate.png')} alt="Tomate" className='h-10 md:ml-5' />
              <li className='my-auto pl-4 md:pl-6 xl:pl-8'>Von den Angeboten profitieren</li>
            </section>
          </ul>
        </div>
        <div className='lg:basis-1/2 bg-gray-200'>
          <img src={require("../assets/Offers.jpg")} className="w-96 mx-auto mt-6 mb-6" alt="QR-Code für die App mit aktuellen Angeboten" />
        </div>
      </div>
    </>
  )
}
