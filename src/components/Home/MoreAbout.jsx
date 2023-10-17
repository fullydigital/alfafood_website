import React from 'react'

export default function MoreAbout({data}) {
  return (
    <div className='flex flex-col w-5/6 mx-auto lg:flex-row lg:w-full lg:h-96 relative z-10 bg-white lg:mb-24'>
      <div className='basis-1/2 2xl:basis-full'>
        <img className='mx-auto lg:h-3/5 xl:h-4/6 2xl:h-5/6 mt-12 md:mt-4 lg:mt-14' src={data.image.url} alt="Foto innerhalb der Filiale" />
      </div>
      <div className='basis-1/2 2xl:basis-3/4 flex flex-col my-12'>
        <h3 className='text-4xl font-bold text-left mb-6'>{data.headline ? data.headline : 'Was wir machen'}</h3>
        <p className='text-left w-11/12 mb-8 leading-7'>{data.text ? data.text :
        "Wenn man die gläserne Eingangstür öffnet, wird man von einem verlockenden Duft von frischem Brot und Gebäck begrüßt. Das Geräusch von rollenden Einkaufswagen und das lebhafte Gemurmel der Kunden füllen die Luft. Die Regale sind sorgfältig bestückt mit einer Fülle von Produkten, die von frischem Obst und Gemüse bis zu Fleisch, Milchprodukten und Trockenwaren reichen."}
        </p>
        <button className='bg-red-700 w-6/12 lg:w-4/12 py-3 text-white font-bold text-left px-6'>Erfahre mehr</button>
      </div>
    </div>
  )
}
