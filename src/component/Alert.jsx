import "./Alert.css";

function Alert() {
  return (
    <div>
      <a
        href="https://www.corrientes.gob.ar/1432/salud-comunica-cronograma-de-las-vacunas-contra-covid-19-y-gripe"
        target={"_blank"}
      >
        <img
          src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1677637860/vacunate_c5ggrp.jpg"
          className="w-75 m-2 rounded"
        />
      </a>
      <img
        src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1675546464/08_250x100_tnehld.gif"
        alt=""
        className="w-75 mt-5"
      />
    </div>
  );
}

export default Alert;
