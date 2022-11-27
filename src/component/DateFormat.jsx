function DateFormat() {
  const Data = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const fecha = Data.toLocaleDateString("es-ES", options);

  return <div className="text-muted fs-6">{fecha}</div>;
}

export default DateFormat;
