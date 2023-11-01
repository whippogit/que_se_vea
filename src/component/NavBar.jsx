function NavBar() {
  return (
    <>
      <nav className="navbar bg-danger">
        <div className="container d-flex justify-content-center">
          <div className="m-0">
            <a className="navbar-brand fs-6 bg-danger text-white" href="/">
              Portada
            </a>
            <a className="navbar-brand fs-6 bg-danger text-white" href="#">
              Política
            </a>
            <a className="navbar-brand fs-6 bg-danger text-white" href="#">
              Economía
            </a>
            <a className="navbar-brand fs-6 bg-danger text-white" href="#">
              Sociedad
            </a>
            <a className="navbar-brand fs-6 bg-danger text-white" href="#">
              Educación
            </a>
            <a className="navbar-brand fs-6 bg-danger text-white" href="#">
              Deporte
            </a>
            <a className="navbar-brand fs-6 bg-danger text-white" href="#">
              Turismo
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
