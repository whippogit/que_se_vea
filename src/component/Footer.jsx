import "./Footer.css";
import SocialFooter from "./SocialFooter";

function Footer({ news }) {
  return (
    <div className="container bg-socialFooter">
      <div className="row bg-footer">
        <div className="col-4 fs-1 bg-footer d-flex justify-content-center">
          <a className="bg-footer">
            <img
              className="img-logo-footer"
              src="/src/img/logoSL.png"
              title="Corrientes Gradual"
            />
          </a>
        </div>
        <div className="col-8 bg-footer d-none d-sm-block">
          {news.map((newsapi) => (
            <ul className="tags d-inline text-dark bg-footer" key={newsapi._id}>
              <li className="d-inline bg-footer">{newsapi.category}</li>
            </ul>
          ))}
        </div>
      </div>
      <div>
        <SocialFooter />
      </div>
    </div>
  );
}

export default Footer;
