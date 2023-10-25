import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import {BLOCKS, MARKS} from '@contentful/rich-text-types';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';


const Bold = ({ children }) => <span className="font-bold">{children}</span>;

const Text = ({ children }) => <p className="mb-6">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>
  }
};

export default function LocationOverviewPage({data}) {
  const [locations, setLocations] = useState(null);

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

  if (!locations) {
    return "Loading...";
  }

  return (
    <div className="flex flex-col">
      <div className="w-10/12 mx-auto text-left mb-10">
        <h1 className="text-4xl font-semibold mb-4 mt-10">{data.headline}</h1>
        {documentToReactComponents(data.text.json, options)}
      </div>
      <div className="flex flex-col md:flex-row md:w-11/12 mx-auto md:flex-wrap gap-2.5 justify-center">
        {locations.map((location) => {
          return (
            <div className='relative w-10/12 md:w-[45%] xl:w-[30%] mx-auto mb-10'>
              <NavLink to={`/location/${location.name}`}>
              <div className='absolute pr-10 py-3 top-5 bg-gray-600 opacity-70'>
                <p className='text-3xl text-left pl-5 text-white'>{location.name}</p>
              </div>
              <img src={location.heroImage.url} alt="" />
                </NavLink>
            </div>
          )
        })}
        <div className='relative w-10/12 md:w-[45%] xl:w-[30%] mx-auto mb-10'>
          <div className='absolute pr-10 py-3 top-5 bg-gray-600 opacity-70'>
            <p className='text-3xl text-left pl-5 text-white'>Rosenheim coming soon...</p>
          </div>
          <img src={require('../assets/aboutUsImage.jpg')} alt="" />
        </div>
      </div>
    </div>
  )
}

