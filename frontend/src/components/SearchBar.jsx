/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

export default function SearchBar(searchProps) {
  const { searchTags, searchCity, setSearchTags, setSearchCity } = searchProps;

  return (
    <div className="searchBarDiv">
      <div className="tagsDiv">
        <form className="tagsForm">
          <label>What are you looking for ?</label>
          <input
            value={searchTags}
            type="text"
            name="tags"
            id="tags"
            placeholder=".  .  ."
            required
            onChange={(event) => setSearchTags(event.target.value)}
          />
        </form>
      </div>

      <div className="cityDiv">
        <form className="cityForm">
          <label>In which office ?</label>
          <input
            value={searchCity}
            type="text"
            name="office"
            id="office"
            placeholder=".  .  ."
            required
            onChange={(event) => setSearchCity(event.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
