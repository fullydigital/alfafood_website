import React, { useEffect, useState } from 'react'
import { Carousel } from 'flowbite-react';
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
  const [locations, setLocations] = useState(null)
  let { id } = useParams();

  const query = `
    {
      contentTypeLocationCollection {
        items {
        name
        street
        locationNumber
        phone
        maps {
          lon
          lat
        }
        text {
          json
        }
        heroImage {
          url
        }
        sliderImagesCollection {
          items {
            url
          }
        }
        openingOne
        openingTwo
      }
    }
    }
  `

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/o2s4pnwpfyn0/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer Bo8-88iNgEersBWGDGZXpY19H-VtlAwVGYnfj3Go6_k",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setLocations(data.contentTypeLocationCollection.items)
      })
  }, [query]);


  if (!locations) return <p>Loading...</p>

  if (locations) {
    const ort = locations.find((item) => item.name === id);
    console.log(ort);

    return (
      <>
        <div className='h-56 md:h-80 2xl:h-400 w-full bg-cover bg-no-repeat bg-center bg-black' style={{ backgroundImage: `url(${ort.heroImage.url})` }} />
        <div className='bg-gray-400 pt-4 pb-8 pl-8 mb-8 lg:mb-20'>
          <h2 className='text-5xl text-left lg:py-4'>Alfafood | <span className='font-bold'>{ort.name}</span></h2>
        </div>
        <div className='flex flex-col w-10/12 mx-auto lg:flex-row'>
          <div className='mb-10 lg:basis-4/6 lg:mb-24'>
            <Carousel className='h-60 md:h-80 xl:h-230' slideInterval={3000}>
              {ort.sliderImagesCollection.items.map((sliderImage) => {
                return <img className="object-resize" src={sliderImage.url} alt="" />
              })}
            </Carousel>
            <div className='text-left mt-8 mb-10'>
              <h2 className='text-4xl text-green-700 mb-8'>Alfafood Filiale <span className="font-semibold">{ort.name}</span></h2>
              <div className='leading-7'>{documentToReactComponents(ort.text.json, options)}</div>
            </div>
            <iframe
              className='w-full h-100 md:h-200'
              title='location map'
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
              <p className='mb-2'>{ort.openingOne}</p>
              <p>{ort.openingTwo}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
