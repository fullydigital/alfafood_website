import React from 'react'
import { NavLink } from "react-router-dom";

export default function Career() {
  return (
    <div className="w-full bg-black text-white pb-10 pt-10 lg:pt-16 mt-20">
      <div className="w-10/12 lg:w-9/12 mx-auto flex flex-col lg:flex-row lg:flex-">
        <div className="flex flex-col mb-8 lg:text-left lg:w-3/4">
          <h3 className='text-2xl lg:text-3xl lg:text-left mb-4'><span className='text-3xl lg:text-5xl font-semibold'>Karriere bei<br /></span> Alfafood GmbH</h3>
          <p className='lg:w-3/4'>Bewerbungen sind erwünscht! Die Nergiz Großmarkt GmbH ist immer auf der Suche nach Verstärkung.</p>
        </div>
        <div className='flex flex-col lg:text-left lg:w-2/3 lg:justify-center'>
          <p className='mb-2 lg:w-3/4 lg:mx-auto'>Ob Bereich Lager, Verkauf oder Buchhaltung - wir freuen uns auf Ihre Bewerbung! Hier geht es zu dem Bewerbungsformular:</p>
          <button className='bg-red-700 py-3 w-1/2 mx-auto lg:w-3/4 mt-4'><NavLink to="/career">Mehr erfahren!</NavLink></button>
        </div>
      </div>
    </div>
  )
}
