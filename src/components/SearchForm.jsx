function SearchForm({ searchTerm, setSearchTerm, handleSearch, setError }) {
  return (
    <section id="search-and-submit" className="search-bar-wrapper">
      <form onSubmit={handleSearch}>
        <label htmlFor="search-input">Search: </label>
        <input
          id="search-input"
          name="search"
          type="text, number"
          placeholder="enter pokemon here"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setError(null);
          }}
          onInvalid={(e) => {
            e.target.setCustomValidity(
              "Please enter a Pokémon name to continue!"
            );
          }}
        />
        <button className="pokeball-button" type="submit">
          <span className="button-text"></span>
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
