import DateFormat from "./DateFormat";

function NavBar() {
  return (
    <>
      <nav className="container-fluid navbar">
        <div className="container">
          <div>
            <div>
              <a className="navbar-brand fs-6" href="#">
                Últimas Noticias
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
                Internacional
              </a>
            </div>
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
