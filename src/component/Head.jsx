import "./Head.css";
import DateFormat from "./DateFormat";
import Search from "./Search";
import Redes from "./Redes";

function Head({ handleSearch }) {
  return (
    <>
      <div className="mb-3">
        <a href="/">
          <img
            className="logo"
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1678999958/quesevea-q_zhugsf.png"
            title="que se vea"
          />
        </a>
        <div className="fs-5 text-center">
          <DateFormat />
        </div>
      </div>
    </>
  );
}

export default Head;
