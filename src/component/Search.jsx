function Search({ handleSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        className="form-control"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
