import React from 'react'

import Image from '../assets/img//house-banner.png'

import Search from '../components/Search'
const Banner = () => {
  return (
    <section className='h-full max-h-[640px] xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col justify-center items-center  lg:items-start text-center lg:text-left px-4 lg:px-0 flex-1'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Rent</span> Your Dream House With
            Us.
          </h1>
          <p
            className='max-w-[480px] mb-3 text-[1rem]
          '
          >
            Welcome to our real estate website, where we are committed to
            helping you find your dream home or investment property.
          </p>{' '}
          <p
            className='max-w-[480px] mb-8 text-[1rem]
          '
          >
            We are here to guide you by providing you with the knowledge and
            expertise you need to make informed decisions.
          </p>
        </div>
        <div className='justify-end flex-1 hidden sm:items-end lg:flex'>
          <img src={Image} alt='' />
        </div>
      </div>
      <Search />
    </section>
  )
}

export default Banner
