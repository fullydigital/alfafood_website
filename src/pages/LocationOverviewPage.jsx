import React from 'react'

export default function LocationOverviewPage({locations}) {
  return (
    <div className="flex flex-col">
      <div className="w-10/12 mx-auto text-left mb-10">
        <h1 className="text-4xl font-semibold mb-4 mt-10">Unsere Standorte</h1>
        <p>In unseren Restaurants erwartet Dich ein kulinarisches Erlebnis der besonderen Art. In gemütlicher Atmosphäre kannst Du Dich von uns verwöhnen lassen und neue Geschmackserlebnisse entdecken. Unsere Speisen werden stets frisch und mit viel Liebe zum Detail zubereitet. Wir verwenden nur hochwertige Zutaten und orientalische Gewürze, um authentische und unverwechselbare Aromen zu kreieren. Komm vorbei und lass Dich von unserer modernen Interpretation der kurdisch-türkischen Küche begeistern.

          Erfahre mehr über das bonaʼme in Deiner Nähe. Klicke einfach auf den gewünschten Standort und erhalte alle nötigen Informationen. An den Standorten bona’me Köln und Dortmund arbeiten wir mit Reservierungen ab 6 Personen. In den anderen Standorten arbeiten wir leider ohne Reservierungen. Schaut einfach so vorbei, wir bemühen uns, Euch einen schönen Tisch zu besorgen.</p>
      </div>
      <div className="flex flex-col md:flex-row md:w-11/12 mx-auto md:flex-wrap gap-2.5 justify-center">
        {locations.map((location) => {
          return (
            <div className='relative w-10/12 md:w-[45%] xl:w-[30%] mx-auto mb-10'>
              <div className='absolute pr-10 py-3 top-5 bg-gray-600 opacity-70'>
                <p className='text-3xl text-left pl-5 text-white'>{location.name}</p>
              </div>
              <img src={require('../assets/aboutUsImage.jpg')} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

