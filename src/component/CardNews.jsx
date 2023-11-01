import "./CardNews.css";
import { Link } from "react-router-dom";

function CardNews({ news }) {
  return (
    <div className="container">
      {news.map((newsapi) => (
        <Link
          reloadDocument
          to={`/noticias/${newsapi._id}`}
          key={newsapi._id}
          title={newsapi.title}
          className="card cardContainer align-top"
        >
          
          <img src={newsapi.image_url} alt={newsapi.title} />
          <div className="titulo">{newsapi.title}</div>

          <p className="description m-2">{newsapi.description}</p>
          
        </Link>
      ))}
      ,
    </div>
  );
}

export default CardNews;
