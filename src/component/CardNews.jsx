import "./CardNews.css";
import { Link } from "react-router-dom";

function CardNews({ news }) {
  return (
    <div className="container p-0">
      {news.map((newsapi) => (
        <Link
          reloadDocument
          to={`/noticias/${newsapi._id}`}
          key={newsapi._id}
          title={newsapi.title}
          className="cardContainer align-top"
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
          
        </Link>
      ))}
      ,
    </div>
  );
}

export default CardNews;
