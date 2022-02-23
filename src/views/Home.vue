<template>
  <div class="container-fluid p-0">
    <section class="section-one p-4">2</section>
    <section class="section-two p-4"></section>
    <section class="section-three p-4">
      sdsds

      <div class="container-xxl mb-0 text-center position-absolute bottom-0 start-0 footer py-1">
        © 2021 Copyright:
        <a class="text-reset">Agustín Báez Núñez</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      photos: [
        {
          id: 1,
          src: "https://www.geekmi.news/__export/1631245370013/sites/debate/img/2021/09/09/zero2.jpg_172596871.jpg",
        },
      ],
    };
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

  .footer {
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
}
</style>npm run serve
