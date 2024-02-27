import React from 'react'
import { Carousel } from 'flowbite-react';

export default function OffersPage({offers}) {

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
            <img src={require("../assets/Offers.jpg")} className="w-96 mx-auto mt-14" alt="QR-Code für die App mit aktuellen Angeboten" />
          </div>
        </div>
      </div>
    </>
  )
}
