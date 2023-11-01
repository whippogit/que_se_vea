import "./Footer.css";
import Copyright from "./Copyright";

function Footer() {
  return (
    <div className="container d-flex justify-content-center">
      <div>
        <img
          className="img-logo-footer"
          src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1678999958/quesevea-q-letras-blancas_mwcdls.png"
          title="que se vea"
        />
        <div className="bg-dark text-light text-center txt-size">
          <Copyright />
        </div>
      </div>
    </div>
  );
}

export default Footer;
