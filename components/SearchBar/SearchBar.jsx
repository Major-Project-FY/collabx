import React from 'react'
import { FaSearch } from "react-icons/fa"

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.container}>
        <input placeholder="Search" type="search" />
        <span>
            <FaSearch size={20} />
        </span>
    </div>
  )
}

export default SearchBar