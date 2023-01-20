import DateFormat from "./DateFormat";
import Search from "./Search";

function NavBar({ handleSearch }) {
  return (
    <>
      <nav className="container-fluid navbar">
        <div className="container">
          <div>
            <div>
              <a className="navbar-brand fs-6" href="#">
                Todas las Noticias
              </a>
              <a className="navbar-brand fs-6" href="#">
                Política
              </a>
              <a className="navbar-brand fs-6" href="#">
                Economía
              </a>
              <a className="navbar-brand fs-6" href="#">
                Sociedad
              </a>
              <a className="navbar-brand fs-6" href="#">
                Educación
              </a>
              <a className="navbar-brand fs-6" href="#">
                Deporte
              </a>
              <a className="navbar-brand fs-6" href="#">
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
