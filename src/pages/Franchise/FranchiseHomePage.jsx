import React, { useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { content } from './FranchiseData';

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 }
};

export default function FranchiseHomePage() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div className="w-full h-72 text-white flex bg-black">
        <h1 className='text-6xl font-semibold mx-auto my-auto'>Alfafood Franchise</h1>
      </div>
      <div className='w-3/4 mx-auto mt-12 mb-20'>
        {
          content.map((item) => {
            return (
              <Accordion open={open === item.id} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(item.id)}>{item.header}</AccordionHeader>
                <AccordionBody>{item.body}</AccordionBody>
              </Accordion>
            )
          })
        }
      </div>
    </div>
  )
}
