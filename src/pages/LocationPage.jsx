import React from 'react'

export default function LocationPage() {
  return (
    <>
      {/* start hero */}
      <div className='flex flex-col-reverse mb-12 md:mb-0 md:flex-row w-full'>
        <div className='flex flex-col basis-1/2 text-left ml-16 md:pl-20 pt-12 md:pt-16'>
          <h2 className='text-red-700 font-semibold text-5xl mb-8'>Nürnberg</h2>
          <p className='mb-2'><span className='font-semibold'>Straße:</span> Platenstraße 65</p>
          <p className='mb-2'><span className='font-semibold'>Postleitzahl:</span> 90441 Nürnberg</p>
          <p className='mb-2'><span className='font-semibold'>Bundesland:</span> Deutschland, Bayern</p>
          <p className='mb-2'><span className='font-semibold'>Telefon:</span> 0911 9401970</p>
          <p className='mb-2'><span className='font-semibold'>E-Mail:</span> info@alfafood.eu</p>
        </div>
        <div className='basis-1/2'>
          <img src={require('../assets/aboutHero.jpg')} alt="Filiale" />
        </div>
      </div>
      {/* end hero */}
      {/* start opening */}
      <div className='h-72 bg-black text-white'>
        <h3 className='mx-auto w-5/6 text-3xl pt-10'>An folgenden Tagen haben wir geöffnet</h3>
        <div>

        </div>
      </div>
      {/* end opening */}
      {/* start google maps */}
      <div>
        <iframe
          className='w-full h-100'
          title='location map'
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.204850429205!2d11.067036576391635!3d49.42394107141442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f573cff7c44bf%3A0xf1f62eb18da2a5ed!2sPlatenstra%C3%9Fe%2065%2C%2090441%20N%C3%BCrnberg!5e0!3m2!1sde!2sde!4v1695643780416!5m2!1sde!2sde"
        >
        </iframe>
        <br />
        {/* <small>
          <a
            href="https://maps.google.com/maps?q='+data.lat+','+data.lon+'&hl=es;z=14&amp;output=embed"
            target="_blank"
          >
            See map bigger
          </a>
        </small> */}
      </div>
      {/* end google maps */}
      {/* start offers */}
      <div className='h-72 w-full mb-96'>
        <div className='flex flex-col md:flex-row w-9/12 md:w-5/6 mx-auto'>
          <div className='basis-2/3 text-left md:pl-20 pt-10'>
            <h3 className='text-red-700 text-4xl font-semibold'>Erhalte Angebote aus deiner Filiale</h3>
            <p className='md:w-9/12 mt-6'>Melde dich über den QR-Code zu unserem WhatsApp Newsletter an um kein Angebot mehr zu verpassen</p>
            <button className='bg-green-700 text-white pr-16 pl-6 py-3 mt-8 text-left'>Per Email anmelden</button>
          </div>
          <div className='relative'>
            <img className='h-64 mx-auto mt-16 md:pl-24' src={require('../assets/Alfafood_Tomate.png')} alt="Markentomate" />
            <img className='h-32 absolute top-1/2 right-24 md:top-1/3 md:right-14' src={require('../assets/QR-Code.png')} alt="" />
          </div>
        </div>
      </div>
      {/* end offers */}
      {/* start gallery */}
      <div className='w-full bg-black py-24'>
        <div className='grid grid-cols md:grid-cols-3 gap-4 w-5/6 mx-auto'>
          <div>
            <img className='h-auto max-w-full' src={require('../assets/aboutHero.jpg')} alt="" />
          </div>
          <div>
            <img className='h-auto max-w-full' src={require('../assets/aboutUsImage.jpg')} alt="" />
          </div>
          <div>
            <img className='h-auto max-w-full' src={require('../assets/aboutHero.jpg')} alt="" />
          </div>
          <div>
            <img className='h-auto max-w-full' src={require('../assets/aboutUsImage.jpg')} alt="" />
          </div>
          <div>
            <img className='h-auto max-w-full' src={require('../assets/aboutHero.jpg')} alt="" />
          </div>
          <div>
            <img className='h-auto max-w-full' src={require('../assets/aboutUsImage.jpg')} alt="" />
          </div>
        </div>
      </div>
      {/* end gallery */}
    </>
  )
}
