<template>
  <div class="app">
    <Navigation />
    <router-view />
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  height: 100vh;
  overflow-y: hidden;

  // background-image: linear-gradient(62deg, var(--primary-color) 0%, #33273f 100%);
  background-color: var(--primary-color);
  background-attachment: fixed;

  color: var(--secondary-color);
}
</style>

/* Global css */
<style lang="scss">
:root {
  --primary-color: #f8f5ee;
  --secondary-color: #472425;
}

.my-shadow {
  box-shadow: 0em 1.5em 43px -20px var(--secondary-color);
  -moz-box-shadow: 0em 1.5em 43px -20px var(--secondary-color);
  -webkit-box-shadow: 0em 1.5em 43px -20px var(--secondary-color);
}

.dark-theme {
  --primary-color: #472425;
  --secondary-color: #f8f5ee;
}

.btn-primary {
  color: var(--secondary-color) !important;
  background-color: var(--primary-color) !important;
  border-color: var(--primary-color) !important;
}

input[type="text"],
textarea {
  background-color: var(--primary-color) !important;
  color: var(--secondary-color) !important;
}

input[type="checkbox"] {
  cursor: pointer;
}

label {
  color: var(--secondary-color);
}

h1,
h2,
h3,
ul,
li,
p,
.link {
  line-height: 1;
  font-family: "futura_m";
  font-weight: normal;
  font: inherit;
  text-shadow: 0 10px 30px rgb(2 11 22 / 50%);
}

.form-control {
  border: none !important;
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 12rem !important;
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 6rem !important;
  }
}

@keyframes fadeTranslateRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>