import { useParams } from "react-router-dom";
import * as Api from "../services/News";
import { useState, useEffect } from "react";

function PageDetails() {
  const [newId, setNewId] = useState({});

  const { id } = useParams();

  useEffect(() => {
    Api.getNewsByTitle(id).then(setNewId).catch(console.log);
  }, [id]);

  return (
    <div className="container text-center">
      <h1>{newId.title}</h1>
      <h4>{newId.description}</h4>
      <h4>{newId.category}</h4>
    </div>
  );
}

export default PageDetails;
