import React, { useState } from "react";
import "./SearchBar.css";
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="header">

    <div className="search">
      <div className="searchInputs">
        <input className="put"
          type="text"
          placeholder="Search essential, groceries, and more..."
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
            <CloseIcon className="clearBtn" 
            onClick={clearInput} />  
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
                <p>{value.title} </p>
            );
          })}
        </div>
      )}
    </div>
    </div>
  );
}

export default SearchBar;
