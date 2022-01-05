<template>
  <nav class="navbar navbar-expand-lg">
    <div
      class="
        collapse
        navbar-collapse
        d-flex
        flex-row
        justify-content-between
        mx-3
      "
    >
      <div class="branding">
        <router-link to="/Home">
          <img src="@/assets/logo.png" alt="logo" />
        </router-link>
      </div>

      <ul id="links" class="d-flex flex-row mr-auto mt-2 mt-lg-0">
        <li v-for="link in links" :key="link" class="nav-item active">
          <router-link class="link" :to="{ path: link.router }"
            ><a>{{ link.name }}</a></router-link
          >
        </li>
        <li>
          <i @click="setLightMode" class="fas fa-sun mode_light"></i>
        </li>
      </ul>

      <ul id="burger">
        <li><i @click="showMinLinks" class="fas fa-bars"></i></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      links: [
        { name: "About", router: "/About" },
        { name: "Example", router: "/Example" },
        { name: "Contact", router: "/Contact" },
      ],
    };
  },
  mounted() {
    this.setLightMode();
  },
  methods: {
    setLightMode() {
      let localData = localStorage.getItem("theme");

      if (localData == "light") {
        localStorage.setItem("theme", "dark");
        document.body.classList.add("dark-theme");

        this.setIconLight("fa-sun", "fa-moon");
      } else {
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark-theme");

        this.setIconLight("fa-moon", "fa-sun");
      }
    },
    setIconLight(after, now) {
      let docs = document.getElementsByClassName("mode_light");

      for (let i = 0; i < docs.length; i++) {
        const doc = docs[i];
        doc.classList.replace(after, now);
      }
    },
    // Toggle Nav
    showMinLinks() {
      var doc = document.getElementById("links");
      doc.classList.toggle("nav-active");

      this.styleLinks();
      this.rotateBurger();
    },
    // Animate Links
    styleLinks() {
      const navLinks = document.querySelectorAll("#links li");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `fadeTranslateRight 0.5s ease forwards ${
            index / 7
          }s`;
        }
      });
    },

    rotateBurger() {
      const doc = document.querySelectorAll("#burger li")[0];

      if (doc.style.transform) {
        doc.style.transform = "";
      } else {
        doc.style.transform = "rotate(90deg)";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  --bs-bg-opacity: none;
  background-color: rgba(red(black), green(black), blue(black), 0.1);
}

ul,
.link {
  font-weight: 500;
  color: var(--secondary-color);
  list-style: none;
  text-decoration: none;
}

.link {
  &:hover {
    color: #00afea;
    border-color: #00afea;
  }
}

li {
  text-transform: uppercase;
  padding: 1em;
}

.mode_light {
  cursor: pointer;
  font-size: 1em;

  &:hover {
    color: #eeda2b;
  }
}

.branding {
  img {
    width: 3em;
    transition: 0.5s ease all;

    cursor: pointer;
  }
}

#burger {
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  #burger {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  #burger {
    display: block;
  }

  #links {
    position: absolute;
    left: 0;
    top: 91%;
    height: 100vh;
    flex-direction: column !important;
    text-align: left;
    padding-right: 20vw;
    background-color: var(--primary-color);
    border-radius: 0 0vw 25vw 0vw;
    transform: translateX(-100%);
    transition: transform 0.5s ease-in;
  }
}

.nav-active {
  transform: translateX(0%) !important;
}
</style>

