import React from 'react'
import SearchBar from './SearchBar'
import GroceriesData from "../Search/data.json"
const SearchDisplay = () => {
  return (
    <div>

   <SearchBar placeholder="EnterName..." data={GroceriesData} />
    </div>
  )
}

export default SearchDisplay