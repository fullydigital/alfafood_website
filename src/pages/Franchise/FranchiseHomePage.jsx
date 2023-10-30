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

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const query = `
    {
      franchiseCollection {
        items {
          id
          headline
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
        setData(data.franchiseCollection.items);
      })
  }, [query]);

  if (!data) {
    return 'Loading ...';
  }

  return (
    <div>
      <div className="w-full h-72 text-white flex bg-cover" style={{ backgroundImage: `url(${background})` }}>
        <h1 className='text-6xl font-semibold mx-auto my-auto'>Alfafood Franchise</h1>
      </div>
      <div className='w-3/4 mx-auto mt-12 mb-20'>
        {
          data.map((item, key) => {
            return (
              <Accordion open={open === item.id} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(item.id)}>{item.headline}</AccordionHeader>
                <AccordionBody>
                  {
                    item.contentCollection.items.map((item, key) => {
                      return (
                        <div>
                          {
                            item.contentType === 'image/jpeg' ? <img src={item.url} className='w-1/2 mx-auto' alt='' /> :
                              item.contentType === 'video/mp4' ? <video className="w-5/6 lg:h-300 mx-auto" controls>
                                <source src={item.url} type="video/mp4" />
                              </video> :
                                item.contentType === 'application/pdf' ?
                                  <iframe src={item.url} className='h-250 w-200 mx-auto' title={key} /> : null
                          }
                        </div>
                      )
                    })
                  }
                </AccordionBody>
              </Accordion>
            )
          })
        }
      </div>
    </div>
  )
}
