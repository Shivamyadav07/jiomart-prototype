import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import styles from "../HomePageCss/Header.module.css";


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
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input className={styles.put}
          type="text"
          placeholder="Search essential, groceries, & more..."
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className={styles.searchIcon} >
            <CloseIcon className="clearBtn" 
            style={{
            color:"rgb(184, 187, 184)",
            cursor:"pointer",
            }}
            onClick={clearInput} />  
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className={styles.dataResult}>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <p className={styles.dataItem} rel="_blank">
                <p>{value.title} </p>
              </p>
            );
          })}
        </div>
      )}
    </div>


    





  );
}

export default SearchBar;
