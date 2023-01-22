import React from 'react'
import { useState } from 'react'
const Search = () => {
    const [search,setSearch]=useState('')
    const handleChange = (e) => {
    setSearch(e.target.value)}
    console.log(search)

  return (
    <div>
        <input
          type="text"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          id="basic-addon1"
          value={search}
          name="search"
          style={{border:'1px solid black',marginTop:'10px'}}
          onChange={handleChange}

        />
        <button>Search</button>
    </div>
  )
}

export default Search