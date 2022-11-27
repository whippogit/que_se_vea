import { useParams } from "react-router-dom";
import * as Api from "../services/News";
import { useState, useEffect } from "react";

function PageDetails() {
  const [newId, setNewId] = useState({});

  const { id } = useParams();

  useEffect(() => {
    Api.getNewsByFlightNumber(id).then(setNewId).catch(console.log);
  }, [id]);

  return (
    <div className="container text-center">
      <h1>{newId.mission_name}</h1>
      <h4>{newId.launch_year}</h4>
      <h4>{newId.launch_date_local}</h4>
    </div>
  );
}

export default PageDetails;
