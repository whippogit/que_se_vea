function Search({ handleSearch }) {
  return (
    <div className="fondo-transparente mt-5">
      
      <input
        type="text"
        placeholder=""
        className="form-control icono-placeholder"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
