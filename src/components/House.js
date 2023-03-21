import React from 'react'

// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi'

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house
  return (
    <div className='p-5 bg-transparent rounded-lg shadow-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img src={image} className='mb-8' alt='' />
      <div className='flex mb-4 gap-x-2'>
        <h2 className='px-3 text-white bg-green-500 rounded-full'>{type}</h2>
        <h3 className='px-3 text-white rounded-full bg-violet-500'>
          {country}
        </h3>
      </div>
      <div className='font-semibold max-w-[260px] text-lg'>{address}</div>

      <div>
        <div className='flex my-4 gap-x-4'>
          <div className='flex items-center gap-1 text-lg text-gray-600'>
            <BiBed size={25} />
            <h2>{bedrooms}</h2>
          </div>
          <div className='flex items-center gap-1 text-lg text-gray-600'>
            <BiBath size={25} />
            <h2>{bathrooms}</h2>
          </div>
          <div className='flex items-center gap-1 text-lg text-gray-600'>
            <BiArea size={25} />
            <h2>{surface}</h2>
          </div>
        </div>
      </div>

      <div className='text-lg font-semibold text-violet-500'>${price}</div>
    </div>
  )
}

export default House
