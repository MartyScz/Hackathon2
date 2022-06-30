/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

export default function SearchBar(searchProps) {
  const { searchTags, searchCity, setSearchTags, setSearchCity } = searchProps;

  return (
    <>
      <div>
        <h1>SearchBar</h1>
      </div>

      <div>
        <form>
          <label>What are you looking for ?</label>
          <input
            value={searchTags}
            type="text"
            name="tags"
            id="tags"
            placeholder="🔍 Ex: Dev, Data, Marketing ..."
            required
            onChange={(event) => setSearchTags(event.target.value)}
          />
        </form>
      </div>

      <div>
        <form>
          <label>In which city ?</label>
          <input
            value={searchCity}
            type="text"
            name="office"
            id="office"
            placeholder="🔍 Ex: Paris, Rennes, Nantes ..."
            required
            onChange={(event) => setSearchCity(event.target.value)}
          />
        </form>
      </div>
    </>
  );
}
