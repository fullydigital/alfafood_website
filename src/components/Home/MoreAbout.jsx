import React from 'react'

export default function MoreAbout() {
  return (
    <div className='flex flex-col w-5/6 mx-auto md:flex-row md:h-96 relative z-10 bg-white md:mb-24'>
      <div className='basis-1/2'>
        <img className='h-3/4 mx-auto mt-12' src={require('../../assets/aboutUsImage.jpg')} alt="Foto innerhalb der Filiale" />
      </div>
      <div className='basis-1/2 flex flex-col my-12'>
        <h3 className='text-4xl font-bold text-left mb-6'>Was wir machen</h3>
        <p className='text-left w-11/12 mb-8 leading-7'>Wenn man die gläserne Eingangstür öffnet, wird man von einem verlockenden
          Duft von frischem Brot und Gebäck begrüßt. Das Geräusch von rollenden Einkaufswagen und das lebhafte Gemurmel
          der Kunden füllen die Luft. Die Regale sind sorgfältig bestückt mit einer Fülle von
          Produkten, die von frischem Obst und Gemüse bis zu Fleisch, Milchprodukten und Trockenwaren reichen.
        </p>
        <button className='bg-red-700 w-6/12 md:w-4/12 py-3 text-white font-bold text-left px-6'>Erfahre mehr</button>
      </div>
    </div>
  )
}
