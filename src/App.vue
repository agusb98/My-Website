<template>
  <div class="app">
    <Navigation />
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation,
  },
  created() {
    this.getLightMode();
  },
  methods: {
    getLightMode() {
      let localData = localStorage.getItem("theme");

      if (!localData) {
        localStorage.setItem("theme", "light");
      }

      if (localData == "light") {
        document.body.classList.remove("dark-theme");
      } else {
        document.body.classList.add("dark-theme");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;

  // background-image: linear-gradient(62deg, var(--primary-color) 0%, #33273f 100%);
  background-color: var(--primary-color);
  background-attachment: fixed;

  color: var(--secondary-color);
}
</style>

/* Global css */
<style lang="scss">
:root {
  --primary-color: #edf2fc;
  --secondary-color: #212121;
}

.my-shadow {
  box-shadow: 0em 1.5em 43px -20px var(--secondary-color);
  -moz-box-shadow: 0em 1.5em 43px -20px var(--secondary-color);
  -webkit-box-shadow: 0em 1.5em 43px -20px var(--secondary-color);
}

.dark-theme {
  --primary-color: #212121;
  --secondary-color: #edf2fc;
}

.btn-primary {
  color: var(--secondary-color) !important;
  background-color: var(--primary-color) !important;
  border-color: var(--primary-color) !important;
}
</style>