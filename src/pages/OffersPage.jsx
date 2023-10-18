import React from 'react'
import { Carousel } from 'flowbite-react';

export default function OffersPage() {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="p-6 bg-gray-200 lg:basis-1/2">
          <Carousel className='h-250 md:w-1/2 mx-auto xl:h-400' slideInterval={3000}>
            <img src={require('../assets/whatsapp1.jpeg')} alt="" />
            <img src={require('../assets/whatsapp2.jpeg')} alt="" />
            <img src={require('../assets/whatsapp3.jpeg')} alt="" />
            <img src={require('../assets/whatsapp4.jpeg')} alt="" />
          </Carousel>
        </div>
        <div className="flex flex-col py-8 justify-center w-10/12 mx-auto text-left lg:basis-1/2">
          <div className="lg:w-10/12 lg:mx-auto">
          <h2 className="text-2xl font-semibold mb-6 lg:text-4xl">Unsere Angebote der Woche</h2>
          <h3 className="mb-6 lg:text-xl">Hier findet Ihr jede zweite Woche aktuelle Angebote für Top-Produkte</h3>
          <p className="mb-6 text-red-700 font-bold lg:text-xl">Gültig von: 02.10.2023 - 07.10.2023</p>
          <p className="lg:text-xl">Unsere Angebote könnt Ihr <a href="#whatsapp" className="text-red-700 underline">hier</a> auch ganz unkompliziert automatisch als WhatsApp - Newsletter erhalten.</p>
          </div>
        </div>
      </div>
    <div className="w-full bg-gray-300 flex flex-col">
      <div className="w-10/12 mx-auto pt-8 lg:pt-12 pb-6 lg:pb-10">
        <h2 className="text-2xl font-semibold mb-4 lg:text-4xl">Zum Newsletter anmelden</h2>
        <p className="lg:text-xl">Melde dich zu unserem Email Newsletter an um keine Angebote mehr zu verpassen!</p>
      </div>
      <div className="pb-12">
        <input type="text" id="subject" class="mb-10 block p-3 mx-auto w-2/3 lg:w-1/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="name@mail.com" required />
        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Nachricht senden</button>
      </div>
    </div>
      <div className='flex flex-col lg:flex-row w-full z-10 relative' id="whatsapp">
        <div className='bg-green-500 text-white lg:basis-1/2 font-semibold text-2xl pb-10'>
          <div className='w-4/5 mx-auto mt-4 lg:mt-12'>
            <img src={require('../assets/whatsapp.png')} className='mx-auto mb-4' alt="" />
            <h2>Unsere Angebote gibts auch als WhatsApp Newsletter</h2>
          </div>
        </div>
        <div className='bg-green-700 lg:basis-1/2'>
          <div className='flex flex-col text-white w-4/5 mx-auto text-xl font-semibold mt-4 pb-10'>
            <p>1. Mit dem Handy QR-Code scannen.</p>
            <p className='mb-6'>2. Nachricht "Senden".</p>
            <img src={require('../assets/QR-Code.png')} className='h-32 w-32 mx-auto' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
