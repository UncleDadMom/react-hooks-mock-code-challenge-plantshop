import React, { useEffect, useState } from "react";

function Search({setFilter}) {
  const [searchTerm, setSearchTerm] = useState("")

    useEffect(()=>{
      setFilter(searchTerm)
    },[searchTerm])

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
