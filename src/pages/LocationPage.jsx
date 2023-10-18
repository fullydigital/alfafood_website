import React, { useEffect, useState } from 'react'
import { Carousel } from 'flowbite-react';
import background from '../assets/aboutUsImage.jpg';
import { useParams } from "react-router-dom";
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Bold = ({ children }) => <span className="font-bold">{children}</span>;

const Text = ({ children }) => <p>{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>
  }
};

export default function LocationPage({ data }) {
  const [ort, setOrt] = useState(null);
  let { id } = useParams();


  useEffect(() => {
    const ort = data.find((item) => item.name === id);
    setOrt(ort);
  }, [id, data]);

  console.log(ort);

  if(!ort) return <p>Loading...</p>

  return (
    <>
      <div className='h-300 w-full bg-cover' style={{ backgroundImage: `url(${background})` }} />
      <div className='bg-gray-400 pt-4 pb-8 pl-8 mb-8 lg:mb-20'>
        <h2 className='text-5xl text-left lg:py-4'>Alfafood | <span className='font-bold'>{ort.name}</span></h2>
      </div>
      <div className='flex flex-col w-10/12 mx-auto lg:flex-row'>
        <div className='mb-10 lg:basis-4/6 lg:mb-24'>
          <Carousel className='h-60 md:h-80 xl:h-200' slideInterval={3000}>
            <img src={require('../assets/aboutHero.jpg')} alt="" />
            <img src={require('../assets/aboutUsImage.jpg')} alt="" />
            <img src={require('../assets/heroImage.jpg')} alt="" />
          </Carousel>
          <div className='text-left mt-8 mb-10'>
            <h2 className='text-4xl text-green-700 mb-8'>Alfafood Filiale <span className="font-semibold">{ort.name}</span></h2>
            <div className='leading-7'>{documentToReactComponents(ort.text.json, options)}</div>
          </div>
          <iframe
            className='w-full h-100 md:h-200'
            title='location map'
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.204850429205!2d11.067036576391635!3d49.42394107141442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f573cff7c44bf%3A0xf1f62eb18da2a5ed!2sPlatenstra%C3%9Fe%2065%2C%2090441%20N%C3%BCrnberg!5e0!3m2!1sde!2sde!4v1695643780416!5m2!1sde!2sde"
            //src={`https://maps.google.com/maps?q=${ort.maps.lat},${ort.maps.lon}&hl=es;z=14&amp;output=embed`}
            src={`https://maps.google.com/maps?q=${ort.maps.lat},${ort.maps.lon}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
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
            <p>{ort.locationNumber}</p>
          </div>
          <div className='bg-gray-400 py-10 bg-opacity-60 mb-14'>
            <div className='bg-gray-400 w-10 h-10 rounded-full mx-auto mb-4 pt-1'>
              <img src={require('../assets/phone.png')} className='h-8 w-8 mx-auto' alt="" />
            </div>
            <h3 className='font-bold text-white mb-6 text-xl uppercase'>Telefon</h3>
            <p>{ort.phone}</p>
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
