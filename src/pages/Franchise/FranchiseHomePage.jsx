import React, { useState, useEffect } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import background from '../../assets/aboutUsImage.jpg';

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 }
};

export default function FranchiseHomePage() {
  const [open, setOpen] = useState(0);
  const [data, setData] = useState(null);
  const [divOpen, setDivOpen] = useState('');
  const [categories, setCategories] = useState([]);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleDivOpen = (value) => setDivOpen(divOpen === value ? 0 : value);

  const query = `
    {
      franchiseCollection {
        items {
          id
          headline
          category
          contentCollection {
            items {
              url
              contentType
            }
          }
        }
      }
    }
  `;

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
        let frCategories = categories.concat(data.franchiseCollection.items.map(({category}) => (category)));
        let unique = [...new Set(frCategories)];
        setCategories(unique);
        setData(data.franchiseCollection.items);
      })
  }, [query, categories]);

  if (!data) {
    return 'Loading ...';
  }

  return (
    <div>
      <div className="w-full h-72 text-white flex bg-cover" style={{ backgroundImage: `url(${background})` }}>
        <h1 className='text-6xl font-semibold mx-auto my-auto'>Alfafood Franchise</h1>
      </div>
      <div className='flex flex-row justify-center gap-10 mt-20 mx-20 flex-wrap'>
        {categories.map((category, index) => {
          return (
            <div className='h-48 w-48 bg-red-600 rounded-lg' onClick={() => handleDivOpen(category)}>
              <p className='my-20 font-semibold text-white'>{category}</p>
            </div>
          )
        })}
      </div>


      <div className='w-3/4 mx-auto mt-12 mb-20'>
        {
          data.map((item) => {
            return (
              item.category === divOpen ?
              <Accordion open={open === item.id} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(item.id)}>{item.headline}</AccordionHeader>
                <AccordionBody className="flex flex-row justify-center gap-4">
                  {
                    item.contentCollection.items.map((item, key) => {
                      return (
                        <div>
                          {
                              item.contentType === 'video/mp4' ? <video className="w-5/6 lg:h-300" controls>
                                <source src={item.url} type="video/mp4" />
                              </video> :
                              item.contentType === 'video/quicktime' ? <video className="w-5/6 lg:h-300 mx-auto" controls>
                                <source src={item.url} type="video/mp4" />
                              </video>
                              :
                                item.contentType === 'application/pdf' ?
                                  <iframe src={item.url} className='h-300 w-200 mx-auto' title={key} /> :
                                item.contentType === 'image/jpeg' || 'image/png' ? <img src={item.url} className='lg:h-[700px] mx-auto' alt='' />
                                : null
                          }
                        </div>
                      )
                    })
                  }
                </AccordionBody>
              </Accordion> : null
            )
          })
        }
      </div>
    </div>
  )
}
