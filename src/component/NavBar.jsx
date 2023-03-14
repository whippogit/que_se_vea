import DateFormat from "./DateFormat";
import Search from "./Search";

function NavBar({ handleSearch }) {
  return (
    <>
      <nav className="navbar bg-danger">
        <div className="container bg-danger">
          <div className="bg-danger m-0">
            <div className="bg-danger">
              <a className="navbar-brand fs-6 bg-danger text-dark" href="/">
                Inicio
              </a>
              <a className="navbar-brand fs-6 bg-danger text-dark" href="#">
                Política
              </a>
              <a className="navbar-brand fs-6 bg-danger text-dark" href="#">
                Economía
              </a>
              <a className="navbar-brand fs-6 bg-danger text-dark" href="#">
                Sociedad
              </a>
              <a className="navbar-brand fs-6 bg-danger text-dark" href="#">
                Educación
              </a>
              <a className="navbar-brand fs-6 bg-danger text-dark" href="#">
                Deporte
              </a>
              <a className="navbar-brand fs-6 bg-danger text-dark" href="#">
                Turismo
              </a>
            </div>
          </div>
          <div>
            <Search handleSearch={handleSearch} />
          </div>
          <div className="fs-5 text-end">
            <DateFormat />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
