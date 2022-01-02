<template>
  <nav class="navbar navbar-expand-lg d-flex justify-content-between">
    <div class="branding">
      <router-link to="/Home">
        <img src="@/assets/logo.png" alt="logo" />
      </router-link>
    </div>

    <ul class="d-flex justify-content-between">
      <li v-for="link in links" :key="link">
        <router-link class="link" :to="{ path: link.router }">{{
          link.name
        }}</router-link>
      </li>
      <li>
        <i @click="setLightMode" class="fas fa-sun mode_light"></i>
      </li>
    </ul>
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
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth <= 750) {
        this.mobile = true;
      } else {
        this.mobile = false;
        this.mobileNav = false;
      }
    },

    setIconLight(after, now) {
      let docs = document.getElementsByClassName("mode_light");

      for (let i = 0; i < docs.length; i++) {
        const doc = docs[i];
        doc.classList.replace(after, now);
      }
    },

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
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  --bs-bg-opacity: none;
  background-color: rgba(8, 8, 8, 0.486);
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
  margin-left: 1em;
}

.mode_light {
  cursor: pointer;
  font-size: 1em;

  &:hover {
    color: #eeda2b;
  }
}

.branding {
  display: flex;
  margin-left: 1em;

  img {
    width: 3em;
    transition: 0.5s ease all;

    cursor: pointer;
  }
}
</style>

