import React from 'react'
import { Carousel } from 'flowbite-react';
import Select from 'react-select';

export default function OffersPage({locations, offers}) {

  const filialen = locations.map((filiale, index) => ({ value: index, label: filiale.name }))

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="p-6 bg-gray-200 lg:basis-1/2">
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
          <p className="lg:text-xl">Unsere Angebote könnt Ihr <a href="#whatsapp" className="text-red-700 underline">hier</a> auch ganz unkompliziert automatisch als WhatsApp - Newsletter erhalten.</p>
          </div>
        </div>
      </div>
    <div className="w-full bg-gray-300 flex flex-col">
      <div className="w-10/12 mx-auto pt-8 lg:pt-12 pb-6 lg:pb-10">
        <h2 className="text-2xl font-semibold mb-4 lg:text-4xl">Zum Newsletter anmelden</h2>
        <p className="lg:text-xl">Melde dich zu unserem Email Newsletter an um keine Angebote mehr zu verpassen!</p>
      </div>
      <div className="pb-12 z-10 relative z-20">
        <div className="flex flex-col w-10/12 lg:flex-row lg:flex-wrap mx-auto">
          <div className="mb-6 lg:basis-1/3 lg:px-2">
            <label for="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail</label>
            <input type="email" id="Email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="name@mail.com" required />
          </div>
          <div className="mb-6 lg:basis-1/3 lg:px-2">
            <label for="adress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adresse</label>
            <input type="text" id="adress" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Straße, Nummer" required />
          </div>
          <div className="mb-6 lg:basis-1/3 lg:px-2">
            <label for="local" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ort</label>
            <input type="text" id="local" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Postleitzahl, Ort" required />
          </div>
          <div className="mb-6 lg:basis-1/3 lg:px-2">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefonnummer</label>
            <input type="text" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Telefonnummer" required />
          </div>
          <div className="mb-6 lg:basis-1/3 lg:px-2">
            <label for="filiale" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Firmenname</label>
            <input type="text" id="filiale" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Firmenname" required />
          </div>
          <div className="flex flex-col pb-14 w-2/3 mx-auto lg:basis-1/3 lg:px-2">
            <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Filiale</label>
            <Select options={filialen} id="location"/>
          </div>
        </div>
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
