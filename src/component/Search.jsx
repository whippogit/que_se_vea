function Search({ handleSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        className="form-control text-secondary bg-dark"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
