import React from 'react'

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Start */}
      <div className='h-200'>
        <img className='h-200 w-screen object-cover grayscale-50' src={require('../assets/aboutHero.jpg')} alt="Familie Burcak" />
      </div>
      {/* Hero End */}
      {/* About Family start */}
      <div className='flex flex-row mt-20 mb-20'>
        <div className='basis-1/3 my-auto'>
          <img className='rounded-full object-cover h-80 w-80 ml-20' src={require('../assets/family.jpg')} alt="Familie Burcak" />
        </div>
        <div className='basis-2/3 flex flex-col items-start my-auto'>
          <h3 className='text-4xl font-semibold mb-8'>Familie Burcak</h3>
          <p className='text-left mr-32 leading-7'>Die Smith-Familie ist ein beeindruckendes Beispiel für eine eng verbundene Familie, die erfolgreich ein florierendes Unternehmen leitet. Das Familienunternehmen, das sie führen, ist SmithTech Solutions, ein renommiertes Unternehmen in der Informationstechnologiebranche. Die Smiths haben nicht nur eine starke familiäre Bindung, sondern auch eine gemeinsame Leidenschaft für Innovation und Technologie.</p>
        </div>
      </div>
      {/* About Family end */}
      {/* divider start */}
      <div className='flex flex-row bg-black text-white mb-20 items-center'>
        <div className='basis-1/3'>
          <img className='h-40 -mt-8 ml-80' src={require('../assets/Alfafood Tomate.png')} alt="Markentomate" />
        </div>
        <div className='basis-1/3 text-4xl'>
          <h3>Lerne Alfafood kennen!</h3>
        </div>
        <div className='basis-1/3'>
          <img className='h-40 -mt-8' src={require('../assets/Alfafood Tomate.png')} alt="Markentomate" />
        </div>
      </div>
      {/* divider end */}
      {/* members start */}
      <div></div>
      {/* members end */}
    </>
  )
}
