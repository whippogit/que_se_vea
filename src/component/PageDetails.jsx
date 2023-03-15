import { useParams } from "react-router-dom";
import * as Api from "../services/News";
import { useState, useEffect } from "react";
import "./PageDetails.css";

function PageDetails() {
  const [noticia, setNoticia] = useState({});

  const params = useParams();

  useEffect(() => {
    Api.getNewsById(params.id)
      .then(setNoticia)

      .catch(console.log);
  }, [params]);

  return (
    <div className="container">
      <div>
        <p className="text-secondary text-decoration-underline">
          {noticia.category}
        </p>
        <div className="row">
          <div className="col-7">
            <hr />
            <h1 className="text-start">{noticia.title}</h1>
        
            <hr />
            <p className="text-secondary fs-5">{noticia.description}</p>
            <p className="lh-lg text-start fs-5 textoP">{noticia.content}</p>
          </div>
          <div className="text-center col-5 d-none d-sm-block">
            <img
              className="w-100 fixed"
              src={noticia.image_url}
              alt={noticia.title}
            />
          </div>
        </div>
      </div>
      <div className="container d-none d-sm-block d-md-none">
        <p className="text-secondary text-decoration-underline">
          {noticia.category}
        </p>
        <div className="row">
          <div className="col-7">
            <hr />
            <h1 className="text-start">{noticia.title}</h1>
        
            <hr />
            <p className="text-secondary fs-5">{noticia.description}</p>
            <p className="fs-5 textoP">{noticia.content}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default PageDetails;
