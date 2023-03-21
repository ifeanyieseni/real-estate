import React from 'react'
import { housesData } from '../data'

import { useParams } from 'react-router-dom'

import { BiBed, BiArea, BiBath } from 'react-icons/bi'

import { Link } from 'react-router-dom'
const PropertyDetails = () => {
  const { id } = useParams()
  // console.log(id)

  // get houseData based on id

  const house = housesData.find((house) => {
    return house.id === parseInt(id)
  })

  return (
    <section>
      <div className='container mx-auto min-h-[800x] mb-14'>
        <div className='flex flex-col mb-4 lg:flex-row lg:items-center lg:justify-between lg:mb-0'>
          <div>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='mb-4 text-lg '>{house.address}</h3>
          </div>

          <div className='flex mb-4 text-sm lg:mb-0 gap-x-2'>
            <div className='px-3 text-white bg-green-500 rounded-full'>
              {house.type}
            </div>
            <div className='px-3 text-white rounded-full bg-violet-500'>
              {house.country}
            </div>
          </div>
          <div className='text-3xl font-semibold text-violet-500 '>
            ${house.price}
          </div>
        </div>

        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt='' />
            </div>

            <div className='flex mb-6 gap-x-6 text-violet-700'>
              <div className='flex items-center gap-x-2'>
                <BiBed className='text-2xl' />
                <h2>{house.bedrooms}</h2>
              </div>

              <div className='flex items-center gap-x-2'>
                <BiBath className='text-2xl' />
                <h2>{house.bedrooms}</h2>
              </div>
              <div className='flex items-center gap-x-2'>
                <BiArea className='text-2xl' />
                <h2>{house.surface}</h2>
              </div>
            </div>
            <p>{house.description}</p>
          </div>

          <div className='flex-1 w-full px-6 py-8 mb-8 bg-white border border-gray-300 rounded-lg 6'>
            <div className='flex items-center mb-8 gap-x-4'>
              <div className='w-20 h-20 p-1 border border-gray-200 rounded-full'>
                <img src={house.agent.image} alt='' />
              </div>
              <div>
                <h2 className='text-lg font-bold'>{house.agent.name}</h2>
                <Link to='' className='text-sm text-violet-700'>
                  View Listings
                </Link>
              </div>
            </div>
            {/* form  */}

            <form className='flex  flex-col gap-y-4'>
              <input
                type='text'
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                placeholder='Name'
              />
              <input
                type='email'
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                placeholder='Email'
              />
              <input
                type='text'
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                placeholder='Phone'
              />
              <textarea
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full p-4 resize-none text-sm text-gray-400 '
                placeholder='Message'
                defaultValue='Hello I am interested in [Modern Apartments]'
              ></textarea>

              <div className='flex gap-x-2'>
                <button
                  className='bg-violet-700 text-white hover:bg-violet-800
                 p-4 w-full text-sm transition'
                >
                  Send message
                </button>
                <button className='w-full text-violet-700 p-4 border border-violet-700 hover:border-violet-500 transition'>
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetails
