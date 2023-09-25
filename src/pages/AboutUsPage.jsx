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
      <div className='flex flex-row mt-20 mb-20 w-11/12 mx-auto'>
        <div className='basis-1/2 my-auto'>
          <img className='rounded-full object-cover h-80 w-80 ml-20' src={require('../assets/family.jpg')} alt="Familie Burcak" />
        </div>
        <div className='basis-5/6 flex flex-col items-start my-auto'>
          <h3 className='text-4xl font-semibold mb-8'>Familie Burcak</h3>
          <p className='text-left mr-20 leading-7'>Die Smith-Familie ist ein beeindruckendes Beispiel für eine eng verbundene Familie, die erfolgreich ein florierendes Unternehmen leitet. Das Familienunternehmen, das sie führen, ist SmithTech Solutions, ein renommiertes Unternehmen in der Informationstechnologiebranche. Die Smiths haben nicht nur eine starke familiäre Bindung, sondern auch eine gemeinsame Leidenschaft für Innovation und Technologie.</p>
        </div>
      </div>
      {/* About Family end */}
      {/* divider start */}
      <div className='flex flex-row bg-black text-white mb-20 items-center'>
        <div className='basis-1/3'>
          <img className='h-40 -mt-8 ml-80' src={require('../assets/Alfafood_Tomate.png')} alt="Markentomate" />
        </div>
        <div className='basis-1/3 text-4xl'>
          <h3>Lerne Alfafood kennen!</h3>
        </div>
        <div className='basis-1/3'>
          <img className='h-40 -mt-8' src={require('../assets/Alfafood_Tomate.png')} alt="Markentomate" />
        </div>
      </div>
      {/* divider end */}
      {/* members start */}
      <div className='flex flex-row'>
        <div className='flex flex-col basis-3/5 items-start pl-28 pt-6'>
          <h2 className='text-4xl font-semibold text-green-800 mb-8'>Roni Burcak</h2>
          <p className='text-left leading-7 w-3/4'>Der Patriarch der Familie und Gründer von SmithTech Solutions. James ist ein visionärer Unternehmer mit über 30 Jahren Erfahrung in der IT-Branche. Seine Entschlossenheit und sein Geschäftssinn haben das Unternehmen von bescheidenen Anfängen zu einem Global Player in der Branche gemacht. Als Familienvater ist er ein liebevoller Mentor und hat seine Leidenschaft für Technologie an seine Kinder weitergegeben.</p>
        </div>
        <div className='basis-2/5'>
          <img className='w-60 ml-20' src={require('../assets/person.jpg')} alt="Roni Burcak" />
        </div>
      </div>
      <div className='w-full h-2 bg-black mb-20 mt-20'></div>
      <div className='flex flex-row'>
        <div className='basis-2/5'>
          <img className='w-60 ml-20' src={require('../assets/person.jpg')} alt="Roni Burcak" />
        </div>
        <div className='flex flex-col basis-3/5 items-start pl-28 pt-6'>
          <h2 className='text-4xl font-semibold text-green-800 mb-8'>Roni Burcak</h2>
          <p className='text-left leading-7 w-3/4'>Der Patriarch der Familie und Gründer von SmithTech Solutions. James ist ein visionärer Unternehmer mit über 30 Jahren Erfahrung in der IT-Branche. Seine Entschlossenheit und sein Geschäftssinn haben das Unternehmen von bescheidenen Anfängen zu einem Global Player in der Branche gemacht. Als Familienvater ist er ein liebevoller Mentor und hat seine Leidenschaft für Technologie an seine Kinder weitergegeben.</p>
        </div>
      </div>
      <div className='w-full h-2 bg-black mb-20 mt-20'></div>
      {/* members end */}
    </>
  )
}
