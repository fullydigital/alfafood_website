import React from 'react'

export default function LocationPage() {
  return (
    <>
      {/* start hero */}
      <div className='flex flex-row w-full'>
        <div className='flex flex-col basis-1/2 text-left pl-20 pt-16'>
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
          width="1440"
          height="300"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.204850429205!2d11.067036576391635!3d49.42394107141442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f573cff7c44bf%3A0xf1f62eb18da2a5ed!2sPlatenstra%C3%9Fe%2065%2C%2090441%20N%C3%BCrnberg!5e0!3m2!1sde!2sde!4v1695643780416!5m2!1sde!2sde"
        >
        </iframe>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!3m2!1sde!2sde!4v1695643712794!5m2!1sde!2sde!6m8!1m7!1sbPQj51IiGHNiLIdxPtrA4A!2m2!1d49.42390901230733!2d11.06878168927794!3f86.593994!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <br />
        <small>
          <a
            href="https://maps.google.com/maps?q='+data.lat+','+data.lon+'&hl=es;z=14&amp;output=embed"
            target="_blank"
          >
            See map bigger
          </a>
        </small>
      </div>
      {/* end google maps */}
      {/* start offers */}
      <div className=''>
        <h3>Erhalte Angebote aus deiner Filiale</h3>
        <p>Melde dich über den QR-Code zu unserem WhatsApp Newsletter an um kein Angebot mehr zu verpassen</p>
        <button>Per Email anmelden</button>
      </div>
      {/* end offers */}
      {/* start gallery */}
      {/* end gallery */}
    </>
  )
}
