import React from 'react'
import SearchBar from './SearchBar'
import GroceriesData from "../Search/data.json"
const SearchDisplay = () => {
  return (
    <div>

   <SearchBar data={GroceriesData} />
    </div>
  )
}

export default SearchDisplay