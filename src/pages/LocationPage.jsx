import React from 'react'
import { Carousel } from 'flowbite-react';

export default function LocationPage() {
  return (
    <>
      <div className='h-96 w-full bg-blue-700' />
      <div className='bg-gray-400 pt-4 pb-8 pl-8 mb-8 lg:mb-20'>
        <h2 className='text-5xl text-left lg:py-4'>Alfafood | <span className='font-semibold'>Nürnberg</span></h2>
      </div>
      <div className='flex flex-col w-10/12 mx-auto lg:flex-row'>
        <div className='mb-10 lg:basis-4/6 lg:mb-24'>
          <div id="default-carousel" className="relative w-full" data-carousel="slide">
            {/* <!-- Carousel wrapper --> */}
            <div class="relative h-60 xl:h-200 lg:h-100 overflow-hidden md:h-96">
              {/* <!-- Item 1 --> */}
              <div class="duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/aboutHero.jpg')} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              {/* <!-- Item 2 --> */}
              <div class="duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/aboutUsImage.jpg')} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              {/* <!-- Item 3 --> */}
              <div class="duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/aboutHero.jpg')} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              {/* <!-- Item 4 --> */}
              <div class="duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/aboutUsImage.jpg')} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              {/* <!-- Item 5 --> */}
              <div class="duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/aboutHero.jpg')} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
            </div>
            {/* <!-- Slider indicators --> */}
            {/* <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div> */}
            {/* <!-- Slider controls --> */}
            <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>






          {/* <img className='lg:h-200 xl:h-300' src={require('../assets/aboutUsImage.jpg')} alt="" /> */}










          <div className='text-left mt-8 mb-10'>
            <h2 className='text-4xl text-green-700 mb-8'>Alfafood Filiale Nürnberg</h2>
            <p className='leading-7'>Frische Vielfalt bei "Grün & Gesund": Unsere Neue Gemüsefiliale

              Wir freuen uns, Ihnen mitteilen zu dürfen, dass "Grün & Gesund" stolz eine brandneue Gemüsefiliale eröffnet hat, die Ihnen die frischesten und schmackhaftesten Gemüsesorten der Region bietet. Mit einer Leidenschaft für gesunde Ernährung und Nachhaltigkeit sind wir bereit, Ihre Einkaufserfahrung auf ein neues Level zu heben.

              Unsere neue Gemüsefiliale ist eine Oase der Frische, die mit lebendigen Farben und verlockenden Düften gefüllt ist. Hier finden Sie ein umfangreiches Sortiment an saisonalen und exotischen Gemüsesorten, um Ihre kulinarischen Kreationen zu bereichern. Von knusprigen Salaten und vitaminreichen Blattgemüsen bis hin zu aromatischen Kräutern und exquisiten Wurzelgemüsen – bei uns gibt es alles.

              Was macht "Grün & Gesund" einzigartig?

              Frisch vom Bauernhof: Unser Gemüse stammt von lokalen Bauern und ausgewählten Lieferanten, die hohe Qualitätsstandards und umweltfreundliche Anbaumethoden gewährleisten. Sie können sicher sein, dass Sie die besten Produkte aus der Region erhalten.

              Saisonale Vielfalt: Wir setzen auf die Schönheit der Jahreszeiten und bieten Ihnen frische Gemüsesorten, die zu jeder Zeit des Jahres verfügbar sind. Genießen Sie Abwechslung und Geschmack in Ihrem Speiseplan.

              Nachhaltigkeit: Wir legen großen Wert auf Nachhaltigkeit. Unsere Filiale verwendet umweltfreundliche Verpackungen und bemüht sich aktiv um Abfallreduzierung. Unsere Partnerschaften mit Bio-Anbauern fördern den schonenden Umgang mit der Natur.

            </p>
          </div>
          <iframe
            className='w-full h-100 md:h-200'
            title='location map'
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.204850429205!2d11.067036576391635!3d49.42394107141442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f573cff7c44bf%3A0xf1f62eb18da2a5ed!2sPlatenstra%C3%9Fe%2065%2C%2090441%20N%C3%BCrnberg!5e0!3m2!1sde!2sde!4v1695643780416!5m2!1sde!2sde"
          >
          </iframe>
        </div>
        <div className='flex flex-col lg:basis-2/6 lg:pl-12'>
          <div className='bg-gray-400 pt-8 pb-12 bg-opacity-60 mb-14'>
            <div className='bg-gray-400 w-10 h-10 rounded-full mx-auto mb-4'></div>
            <h3 className='font-bold text-white mb-6 text-xl uppercase'>Adresse</h3>
            <p className='mb-2'>Platenstraße 65</p>
            <p>90441 Nürnberg</p>
          </div>
          <div className='bg-gray-400 py-10 bg-opacity-60 mb-14'>
            <div className='bg-gray-400 w-10 h-10 rounded-full mx-auto mb-4'></div>
            <h3 className='font-bold text-white mb-6 text-xl uppercase'>Telefon</h3>
            <p className='mb-2'>Platenstraße 65</p>
            <p>0151 - 61726482</p>
          </div>
          <div className='bg-gray-400 py-10 bg-opacity-60 mb-20'>
            <div className='bg-gray-400 w-10 h-10 rounded-full mx-auto mb-4'></div>
            <h3 className='font-bold text-white mb-6 text-xl uppercase'>Öffnungszeiten</h3>
            <p className='mb-2'>Mo.-Fr.: 11.00 - 23.00 Uhr</p>
            <p>Sa. & So.: 10.00 - 23.00 Uhr</p>
          </div>
        </div>
      </div>
    </>
  )
}
