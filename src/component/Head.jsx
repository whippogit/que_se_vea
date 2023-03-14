import "./Head.css";

function Head() {
  return (
    <>
      <a href="/" className="fondo-transparente row">
        <div className="col-10 fondo-transparente">
          <img
            className="logo fondo-transparente"
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1678733570/logo-queSeVea_ennvt0.png"
            title="que se vea"
          />
        </div>

        <div className="col-2 fondo-transparente">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1677775249/logo-corrientes_rzqz0i.png"
            alt="corrintes somos todos"
            className="banner-ctes mt-4 fondo-transparente"
            title="corrintes somos todos"
          />
        </div>
      </a>
    </>
  );
}

export default Head;
