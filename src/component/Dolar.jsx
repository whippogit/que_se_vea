function Dolar({ dolar }) {
  return (
    <>
      {dolar.map((dolarValue) => (
        <div key={dolarValue.source} className="d-inline p-2 bg-light">
          <div className="d-inline p-2 bg-light">
            <span className="fw-bold fs-6 bg-light">U$s {dolarValue.source} </span>{" "}
            {dolarValue.value_buy}
            {"  "}
          </div>
          <div className="d-inline p-2 fs-6 bg-light">
            {"  "}
            <span className="text-info fw-bold bg-light">{dolarValue.value_sell}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Dolar;
