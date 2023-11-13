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
    <>
      <div className="container d-none d-sm-block">
        <i className="text-secondary text-decoration-underline">
          {noticia.category}
        </i>
        <div className="row">
          <div className="col-7">
            <hr />
            <h2 className="text-start">{noticia.title}</h2>

            <hr />
            <p className="text-secondary fs-5">{noticia.description}</p>
            <p className="lh-lg text-start fs-5 textoP">{noticia.content}</p>
          </div>
          <div className="text-center col-5">
            <img
              className="w-100"
              src={noticia.image_url}
              alt={noticia.title}
            />
          </div>
        </div>
      </div>

      <div className="container d-block d-sm-none mt-3">
        <i className="text-secondary text-decoration-underline">
          {noticia.category}
        </i>

        <hr />
        <h2 className="text-start">{noticia.title}</h2>

        <hr />
        <div className="text-center">
          <img className="w-100" src={noticia.image_url} alt={noticia.title} />
        </div>
        <p className="text-secondary fs-5">{noticia.description}</p>
        <p className="lh-lg text-start fs-5 textoP">{noticia.content}</p>
      </div>
    </>
  );
}

export default PageDetails;
