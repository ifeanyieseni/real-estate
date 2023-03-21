import React, { useState, useEffect } from 'react'

import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

/// import headless ui
import { Menu } from '@headlessui/react'

import { useGlobalContext } from './HouseContext'

const PriceRangeDropdown = () => {
  const { price, setPrice } = useGlobalContext()
  const [isOpen, setIsOpen] = useState(false)

  const prices = [
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '190000 - 220000',
    },
    {
      value: '10000 - 30000',
    },
    {
      value: '30000 - 40000',
    },
  ]

  // console.log(countries)

  return (
    <Menu as='div' className='relative dropdown'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full text-left dropdown-btn'
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose a price range:</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          const { value } = price
          return (
            <Menu.Item
              onClick={() => setPrice(value)}
              className='transition cursor-pointer hover:text-violet-700'
              as='li'
              key={index}
            >
              {value}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PriceRangeDropdown
