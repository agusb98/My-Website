<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <router-link to="/Home">
          <img src="@/assets/logo.png" alt="logo" />
        </router-link>
      </div>

      <!-- <form v-show="!mobile" class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->

      <ul v-show="!mobile" class="navigation">
        <li v-for="link in links" :key="link">
          <router-link class="link" :to="{ path: link.router }">{{ link.name }}</router-link>
        </li>
        <li>
          <i @click="setLightMode" class="fas fa-sun mode_light"></i>
        </li>
      </ul>

      <div v-show="mobile" class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="far fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>

      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li v-for="link in links" :key="link">
            <router-link class="link" :to="{ path: link.router }">{{
              link.name
            }}</router-link>
          </li>
          <li>
            <i @click="setLightMode" class="fas fa-sun mode_light"></i>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      scrolledNav: null,
      mobile: true,
      mobileNav: null,
      windowWidth: null,
      links: [
        { name: "About", router: "/Contact" },
        { name: "Portofio", router: "/Contact" },
        { name: "Contact", router: "/Contact" },
      ],
    };
  },

  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      this.scrolledNav = scrollPosition > 50;
    },

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
header {
  background-color: rgba(8, 8, 8, 0.486);
  z-index: 99;
  width: 100%;
  position: relative;
  transition: 0.5s ease all;

  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    position: relative;
    transition: 0.5s ease all;
    width: 100%;
    padding: 0.2rem 0;

    // Response
    @media (min-width: 1140px) {
      max-width: 100%;
    }

    ul,
    .link {
      font-weight: 500;
      color: var(--secondary-color);
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 1rem;
      margin-left: 1rem;
    }

    .link {
      font-size: 0.9rem;
      transition: 0.5s ease all;
      padding-bottom: 0.1rem;
      border-bottom: 0.01rem solid transparent;

      &:hover {
        color: #00afea;
        border-color: #00afea;
      }
    }

    .branding {
      display: flex;
      align-items: center;

      margin-left: 2rem;

      img {
        width: 3rem;
        transition: 0.5s ease all;

        margin-left: 1rem;
        cursor: pointer;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon {
      display: flex;
      align-items: center;

      top: 0;
      left: 0%;
      position: absolute;

      height: 100%;
      padding: 0.5rem;

      i {
        cursor: pointer;
        font-size: 1.5rem;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 250px;
      max-width: 250px;
      height: 50%;
      background-color: var(--primary-color);
      top: 3.4rem;
      left: 0;
      border-radius: 0% 2% 50%;
      box-shadow: 1rem 1rem 2rem #00afea73;

      li {
        margin-left: 0;

        .link {
          color: var(--secondary-color);
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    padding: 0.5rem 0;

    .branding {
      width: 40px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  }
}

.mode_light {
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: #eeda2b;
  }
}
</style>