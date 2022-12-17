function Slider() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="src/img/coca-nestle.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="src/img/corrientes_02.jpg" class="d-block w-50" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="src/img/corrientes_01.jpg" class="d-block w-50" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Slider;
