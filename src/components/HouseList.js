import React from 'react'
import { useGlobalContext } from './HouseContext'

import { Link } from 'react-router-dom'

import House from './House'

import { ImSpinner2 } from 'react-icons/im'
const HouseList = () => {
  const { houses, loading } = useGlobalContext()

  // if loading is true

  if (loading) {
    return (
      <div className='flex flex-col'>
        <ImSpinner2
          className='mx-auto animate-spin text-4xl text-violet-700
     mt-[200px]'
        />
        <h3 className='text-2xl text-center'>Homeland</h3>
      </div>
    )
  }
  if (houses.length < 1) {
    return (
      <div className='mt-48 text-3xl text-center text-gray-400'>
        {' '}
        Sorry , nothing found
      </div>
    )
  }
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-14'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HouseList
