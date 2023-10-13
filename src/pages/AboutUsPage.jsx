import React from 'react'

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Start */}
      <div className='lg:h-200'>
        <img className='md:h-200 w-screen object-cover grayscale-50' src={require('../assets/aboutHero.jpg')} alt="Familie Burcak" />
      </div>
      {/* Hero End */}
      {/* About Family start */}
      <div className='flex flex-col-reverse lg:flex-row mt-12 lg:mt-20 mb-20 lg:w-9/12 mx-auto'>
        <div className='basis-1/2 lg:basis-full my-auto'>
          <img className='rounded-full object-cover h-80 w-80 mx-auto lg:ml-20' src={require('../assets/family.jpg')} alt="Familie Burcak" />
        </div>
        <div className='basis-5/6 w-5/6 lg:w-full flex flex-col items-start mx-auto align-middle mb-12 lg:mb-0 2xl:my-auto'>
          <h3 className='text-4xl text-left mx-auto lg:mx-0 font-semibold mb-8'>Familie Burcak</h3>
          <p className='text-left mx-auto lg:mr-20 leading-7'>Die Smith-Familie ist ein beeindruckendes Beispiel für eine eng verbundene Familie, die erfolgreich ein florierendes Unternehmen leitet. Das Familienunternehmen, das sie führen, ist SmithTech Solutions, ein renommiertes Unternehmen in der Informationstechnologiebranche. Die Smiths haben nicht nur eine starke familiäre Bindung, sondern auch eine gemeinsame Leidenschaft für Innovation und Technologie.</p>
        </div>
      </div>
      {/* About Family end */}
      {/* divider start */}
      <div className='flex flex-col lg:flex-row bg-black text-white mb-20 items-center'>
        <div className='lg:basis-1/3 lg:flex justify-end h-0 lg:h-full collapse lg:visible'>
          <img className='h-40 -mt-8' src={require('../assets/Alfafood_Tomate.png')} alt="Markentomate" />
        </div>
        <div className='lg:basis-1/3 mx-auto py-10 lg:py-0 text-3xl md:text-4xl'>
          <h3 className='mx-auto'>Lerne Alfafood kennen!</h3>
        </div>
        <div className='lg:basis-1/3 flex justify-start h-0 lg:h-full collapse lg:visible'>
          <img className='h-40 -mt-8' src={require('../assets/Alfafood_Tomate.png')} alt="Markentomate" />
        </div>
      </div>
      {/* divider end */}
      {/* members start */}
      <div className='flex flex-col-reverse md:flex-row lg:w-10/12 xl:w-8/12 mx-auto'>
        <div className='flex flex-col basis-3/5 items-start pt-6'>
          <h2 className='text-4xl font-semibold text-green-800 text-left w-5/6 md:w-3/4 mx-auto mb-8'>Roni Burcak</h2>
          <p className='text-left leading-7 mx-auto w-5/6 md:w-3/4'>Der Patriarch der Familie und Gründer von SmithTech Solutions. James ist ein visionärer Unternehmer mit über 30 Jahren Erfahrung in der IT-Branche. Seine Entschlossenheit und sein Geschäftssinn haben das Unternehmen von bescheidenen Anfängen zu einem Global Player in der Branche gemacht. Als Familienvater ist er ein liebevoller Mentor und hat seine Leidenschaft für Technologie an seine Kinder weitergegeben.</p>
        </div>
        <div className='basis-2/5'>
          <img className='w-60 mx-auto mb-6 lg:mb-0' src={require('../assets/person.jpg')} alt="Roni Burcak" />
        </div>
      </div>
      <div className='w-full h-2 bg-black mb-20 mt-20'></div>
      <div className='flex flex-col md:flex-row mx-auto lg:w-10/12 xl:w-8/12'>
        <div className='basis-2/5'>
          <img className='w-60 mx-auto mb-6 lg:mb-0 lg:ml-20' src={require('../assets/person.jpg')} alt="Roni Burcak" />
        </div>
        <div className='flex flex-col basis-3/5 items-start lg:pl-28 pt-6'>
          <h2 className='text-4xl font-semibold mx-auto w-5/6 md:w-3/4 text-left text-green-800 mb-8'>Roni Burcak</h2>
          <p className='text-left leading-7 w-5/6 mx-auto md:w-3/4'>Der Patriarch der Familie und Gründer von SmithTech Solutions. James ist ein visionärer Unternehmer mit über 30 Jahren Erfahrung in der IT-Branche. Seine Entschlossenheit und sein Geschäftssinn haben das Unternehmen von bescheidenen Anfängen zu einem Global Player in der Branche gemacht. Als Familienvater ist er ein liebevoller Mentor und hat seine Leidenschaft für Technologie an seine Kinder weitergegeben.</p>
        </div>
      </div>
      <div className='w-full h-2 bg-black mb-20 mt-20'></div>
      {/* members end */}
    </>
  )
}
