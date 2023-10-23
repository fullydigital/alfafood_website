import React from 'react'

export default function AboutUsPage({data}) {
  return (
    <>
      {/* Hero Start */}
      <div className='lg:h-200'>
        <img className='md:h-200 w-screen object-cover grayscale-50' src={require('../assets/aboutHero.jpg')} alt="Familie Burcak" />
      </div>
      {/* Hero End */}
      {/* About Family start */}
      <div className='flex flex-col-reverse lg:flex-row mt-12 lg:mt-20 mb-20 lg:w-10/12 xl:w-9/12 mx-auto'>
        <div className='basis-1/2 lg:basis-full my-auto'>
          <img className='object-cover h-80 w-80 mx-auto lg:ml-20' src={data.image.url} alt="Familie Burcak" />
        </div>
        <div className='basis-5/6 w-5/6 lg:w-full flex flex-col items-start mx-auto align-middle mb-12 lg:mb-0 2xl:my-auto'>
          <h3 className='text-4xl text-left mx-auto lg:mx-0 font-semibold mb-8'>{data.headline ? data.headline : 'Familie Burcak'}</h3>
          <p className='text-left mx-auto lg:mr-20 leading-7'>{data.text}</p>
        </div>
      </div>
      {/* About Family end */}
      <div className="w-full bg-gray-400 p-12 mb-20">
        <div className="w-11/12 flex justify-center mx-auto">
          <video className="w-5/6 lg:h-300" controls>
            <source src={data.video.url} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  )
}
