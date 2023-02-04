import "./Alert.css";

function Alert({ alerts }) {
  return (
    <>
      <ul>
        {alerts.map((alertsapi) => (
          <div key={alertsapi._id}>
            <div>
              <a href="https://www.dpec.com.ar/" target="blank">
                <img className="w-100" src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1675545999/dpec_zg6nhp.jpg" alt="dpec" />
              </a>

              <div className="title text-danger">{alertsapi.title}</div>
              <p className="pAlert">{alertsapi.content}</p>
            </div>
            <hr className="hrAlert" />
          </div>
        ))}
      </ul>

      <img src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1675546464/08_250x100_tnehld.gif" className="w-75 m-2 rounded" />
      <img src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1675546465/ctes2030-250x100_hwnabw.gif" className="w-75 m-2 rounded" />
    </>
  );
}

export default Alert;
