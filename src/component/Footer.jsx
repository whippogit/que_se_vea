import "./Footer.css";
import Redes from "./Redes";

function Footer() {
  return (
    <div className="container fondo-transparente pt-1">
      <div className="row fondo-transparente d-flex justify-content-between">
        <div className="col-10 fondo-transparente">
          <img
            className="img-logo-footer fondo-transparente"
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1678742873/logo-queSeVea-grises_nn0q5d.png"
            title="que se vea"
          />
        </div>

        <div className="col-2 fondo-transparente mb-3 text-white d-none d-sm-block">
          <Redes />
        </div>
      </div>

      <div className="container">
        <hr className="p-0 m-0" />
      </div>
      <ul className="navbar bg-dark m-0">
        <div className="fondo-transparente ">
          <h6 className="navbar-brand bg-dark fs-6">Publicidad</h6>
          <ul className="bg-dark p-0">
            <li className="fondo-transparente text-white">
              <i class="fa-regular fa-envelope me-2 bg-dark"></i>
              blfernando.fb@gmail.com
            </li>
            <li className="fondo-transparente text-white">
              <i class="fa-regular fa-envelope me-2 bg-dark"></i>
              sagapro@yahoo.com.ar
            </li>
          </ul>
        </div>
        <div className="fondo-transparente">
          <h6 className="navbar-brand bg-dark fs-6">Contacto</h6>
          <ul className="bg-dark p-0">
            <li className="fondo-transparente text-white">
              <i class="fa-brands fa-whatsapp bg-dark me-2"></i>3794655889
            </li>
            <li className="fondo-transparente text-white">
              <i class="fa-brands fa-whatsapp bg-dark me-2"></i>3794401666
            </li>
          </ul>
        </div>
        <div className="fondo-transparente">
          <h6 className="navbar-brand bg-dark fs-6">Redacción</h6>
          <ul className="bg-dark p-0">
            <li className="fondo-transparente text-white">
              <i class="fa-regular fa-envelope me-2 bg-dark"></i>
              whippocode@gmail.com
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
