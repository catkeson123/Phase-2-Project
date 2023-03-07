function Search({ updateSearch }) {
  return (
    <div className="searchbar">
      <label className="beerSearch" htmlFor="search">
        Search Beer:
      </label>
      <input
        type="text"
        id="search"
        placeholder="Type a beer name to search..."
        onChange={(e) => updateSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
