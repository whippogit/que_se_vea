import "./CardNews.css";
import { Link } from "react-router-dom";

function CardNews({ news }) {
  return (
    <>
      <div className="container">
        {news.map((newsapi) => (
          <Link
            to={"/new/" + newsapi.id + newsapi.name}
            key={newsapi.name}
            title={newsapi.name}
            className="cardContainer"
          >
            <img src={newsapi.image} alt={newsapi.name}/>
            <div className="categoria">
              <h6>{newsapi.species}</h6>
            </div>
            <div className="titulo">{newsapi.name}</div>
            <div className="footer-card">
              <img src="src/img/rickandmorty.png" alt={newsapi.name} />
              <div className="by">{newsapi.status}</div>
            </div>
            <div className="date">{newsapi.created}</div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CardNews;
