import "./Alert.css";

function Alert({ alerts }) {
  return (
    <>
      <ul>
        {alerts.map((alertsapi) => (
          <div key={alertsapi._id}>
            <div>
              <a href="https://www.dpec.com.ar/" target="blank">
                <img className="w-100" src="/src/img/dpec.jpg" alt="dpec" />
              </a>

              <div className="title text-danger">{alertsapi.title}</div>
              <p className="pAlert">{alertsapi.content}</p>
            </div>
            <hr className="hrAlert" />
          </div>
        ))}
      </ul>

      <img src="/src/img/ctes2030-250x100.gif" className="w-75 m-2 rounded" />
      <img src="/src/img/08 250x100.gif" className="w-75 m-2 rounded" />
    </>
  );
}

export default Alert;
