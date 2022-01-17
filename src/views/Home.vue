<template>
  <div class="container-fluid p-0">
    <section class="section-one p-4">2</section>
    <section class="section-two p-4">
      <div
        id="carouselExampleIndicators"
        class="carousel slide container-xxl"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.geekmi.news/__export/1631245370013/sites/debate/img/2021/09/09/zero2.jpg_172596871.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.geekmi.news/__export/1631245370013/sites/debate/img/2021/09/09/zero2.jpg_172596871.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.geekmi.news/__export/1631245370013/sites/debate/img/2021/09/09/zero2.jpg_172596871.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section class="section-three p-4">
      sdsds
      <!-- <div class="d-flex fixed-bottom text-center">
        <Footer />
      </div> -->
    </section>
  </div>
</template>

<script>
// import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    // Footer,
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  section {
    height: 100vh;
    scroll-snap-align: start;
  }

  .section-one {
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  }

  .section-two {
    background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);

    .carousel {
      width: 70vw;
    }

    .carousel-inner {
      border-radius: 5em;
    }
  }

  .section-three {
    background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);
  }
}
</style>npm run serve
