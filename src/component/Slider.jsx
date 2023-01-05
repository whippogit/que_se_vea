function Slider() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="src/img/banner-blanco.jpg"
            className="d-block w-100 rounded m-5"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
