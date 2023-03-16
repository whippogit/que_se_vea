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
      <div className="container">
        <div className="d-none d-sm-block">
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
            <div className="text-center col-5">
              <img
                className="w-100 fixed"
                src={noticia.image_url}
                alt={noticia.title}
              />
            </div>
          </div>
        </div>

        <div className="d-block d-sm-none position-absolute">
          <div className="position-relative mb-5">
            <p className="text-secondary text-decoration-underline">
              {noticia.category}
            </p>
            <h4>{noticia.title}</h4>
            <hr />
            <div className="m-2">
              <p className="text-secondary fs-5">{noticia.description}</p>
              <p className="lh-lg text-start fs-5 textoP">{noticia.content}</p>
            </div>
            <img
              className="w-75 fixed"
              src={noticia.image_url}
              alt={noticia.title}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageDetails;
