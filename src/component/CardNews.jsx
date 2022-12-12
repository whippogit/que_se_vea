import "./CardNews.css";
import { Link } from "react-router-dom";

function CardNews({ news }) {
  return (
    <div className="container">
      <div>
        {news.map((newsapi) => (
          <Link
            to={"/new/" + newsapi._id + newsapi.title}
            key={newsapi._id}
            title={newsapi.title}
            className="cardContainer"
          >
            <img src={newsapi.image_url} alt={newsapi.title} />
            <div className="categoria">
              <h6>{newsapi.category}</h6>
            </div>
            <div className="titulo">{newsapi.title}</div>
            <p className="description">{newsapi.description}</p>
            <div className="footer-card">
              
              <div className="by">Dirección de Información Pública</div>
            </div>
            <div className="date">11 de Diciembre 2022</div>
          </Link>
        ))},
        
      </div>
    </div>
  );
}

export default CardNews;
