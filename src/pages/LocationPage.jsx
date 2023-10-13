import React, {useEffect, useState} from 'react'
import { Carousel } from 'flowbite-react';
import background from '../assets/aboutUsImage.jpg';
import {useParams} from "react-router-dom";
import locations from '../data/locations';

export default function LocationPage() {
  const [ort, setOrt] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const ort = locations.find((item) => item.name === id);
    setOrt(ort);
  }, [id]);

  return (
    <>
      <div className='h-96 w-full bg-cover' style={{ backgroundImage: `url(${background})` }} />
      <div className='bg-gray-400 pt-4 pb-8 pl-8 mb-8 lg:mb-20'>
        <h2 className='text-5xl text-left lg:py-4'>Alfafood | <span className='font-semibold'>{ort.name}</span></h2>
      </div>
      <div className='flex flex-col w-10/12 mx-auto lg:flex-row'>
        <div className='mb-10 lg:basis-4/6 lg:mb-24'>
          <Carousel className='h-60 md:h-80 xl:h-200' slideInterval={3000}>
            <img src={require('../assets/aboutHero.jpg')} alt="" />
            <img src={require('../assets/aboutUsImage.jpg')} alt="" />
            <img src={require('../assets/heroImage.jpg')} alt="" />
          </Carousel>
          <div className='text-left mt-8 mb-10'>
            <h2 className='text-4xl text-green-700 mb-8'>Alfafood Filiale {ort.name}</h2>
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
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.204850429205!2d11.067036576391635!3d49.42394107141442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f573cff7c44bf%3A0xf1f62eb18da2a5ed!2sPlatenstra%C3%9Fe%2065%2C%2090441%20N%C3%BCrnberg!5e0!3m2!1sde!2sde!4v1695643780416!5m2!1sde!2sde"
          >
          </iframe>
        </div>
        <div className='flex flex-col lg:basis-2/6 lg:pl-12'>
          <div className='bg-gray-400 pt-8 pb-12 bg-opacity-60 mb-14'>
            <div className='bg-gray-400 w-10 h-10 rounded-full mx-auto mb-4 pt-1'>
              <img src={require('../assets/adress_icon.png')} className='h-8 w-8 mx-auto' alt="" />
            </div>
            <h3 className='font-bold text-white mb-6 text-xl uppercase'>Adresse</h3>
            <p className='mb-2'>{ort.street}</p>
            <p>{ort.local}</p>
          </div>
          <div className='bg-gray-400 py-10 bg-opacity-60 mb-14'>
            <div className='bg-gray-400 w-10 h-10 rounded-full mx-auto mb-4 pt-1'>
              <img src={require('../assets/phone.png')} className='h-8 w-8 mx-auto' alt="" />
            </div>
            <h3 className='font-bold text-white mb-6 text-xl uppercase'>Telefon</h3>
            <p>{ort.number}</p>
          </div>
          <div className='bg-gray-400 py-10 bg-opacity-60 mb-20'>
            <div className='bg-gray-400 w-10 h-10 rounded-full mx-auto mb-4 pt-1'>
              <img src={require('../assets/clock.png')} className='h-8 w-8 mx-auto' alt="" />
            </div>
            <h3 className='font-bold text-white mb-6 text-xl uppercase'>Öffnungszeiten</h3>
            <p className='mb-2'>Mo.-Fr.: 11.00 - 23.00 Uhr</p>
            <p>Sa. & So.: 10.00 - 23.00 Uhr</p>
          </div>
        </div>
      </div>
    </>
  )
}
