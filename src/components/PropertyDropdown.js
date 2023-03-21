import React, { useState, useEffect } from 'react'

import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

/// import headless ui
import { Menu } from '@headlessui/react'

import { useGlobalContext } from './HouseContext'

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useGlobalContext()

  const [isOpen, setIsOpen] = useState(false)

  // console.log(countries)

  return (
    <Menu as='div' className='relative dropdown'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full text-left dropdown-btn'
      >
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {property}
          </div>
          <div className='text-[13px]'>Select your place:</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className='transition cursor-pointer hover:text-secondClr'
              as='li'
              key={index}
            >
              {property}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PropertyDropdown
