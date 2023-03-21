import React, { useState, useContext, useEffect, createContext } from 'react'

import { housesData } from '../data'
// create Context

export const HouseContext = createContext()

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData)
  const [country, setCountry] = useState('Location (any)')
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState('Property type (any)')
  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState('Price range (any)')
  const [loading, setLoading] = useState(false)

  // return  all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country
    })
    // console.log(allCountries)

    // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)]
    // console.log(uniqueCountries)

    setCountries(uniqueCountries)
  }, [])

  // return  all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type
    })
    // console.log(allProperties)

    // remove duplicates
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)]
    // console.log(uniqueCountries)

    setProperties(uniqueProperties)
  }, [])

  const handleClick = () => {
    setLoading(true)
    // console.log(country, property, price)

    const isDefault = (str) => {
      return str.split(' ').includes('(any)')
    }

    // get first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0])
    // console.log(minPrice)

    const maxPrice = parseInt(price.split(' ')[2])
    // console.log(maxPrice)

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price)

      // if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house
      }

      // if all values are selected

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house
      }

      // if country is not default

      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country
      }

      // if property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property
      }

      // if price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house
        }
      }

      // if country and property is not default
      if (!isDefault(country) && isDefault(price) && !isDefault(property)) {
        return house.country === country && house.type === property
      }

      // property and price is not default

      if (isDefault(country) && !isDefault(price) && !isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property
        }
      }
    })

    // console.log(newHouses)
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      )
    }, 1000)

    // return newHouses
  }

  return (
    <HouseContext.Provider
      value={{
        property,
        setProperty,
        properties,
        houses,
        country,
        setCountry,
        countries,
        price,
        setPrice,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(HouseContext)
}

export default HouseContextProvider
