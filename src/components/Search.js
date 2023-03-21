import React from 'react'

import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'

//Import icons

import { RiSearch2Line } from 'react-icons/ri'

import { useGlobalContext } from './HouseContext'
const Search = () => {
  const { houses, handleClick } = useGlobalContext()

  return (
    <div className='px-[30px] flex py-6 mx-auto flex-col lg:flex-row justify-between max-w-[1170px] relative lg:top-4 lg:shadow-1 gap-4 lg:gap-x-3 bg-white lg:bg-transparent lg:backdrop-blur'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'
        onClick={handleClick}
      >
        <RiSearch2Line />
      </button>
    </div>
  )
}

export default Search
