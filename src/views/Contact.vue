<template>
  <div class="header">
    <h1>Contact Us</h1>
    <p>Any question or remarks? Just write us a message!</p>
  </div>

  <div class="container my-shadow">
    <div class="row p-1">
      <!-- Information right -->
      <div class="col-4 p-4">
        <h2>Contact Information</h2>

        <p class="p-2">
          Fill up the form and our Team will get back to within 24 hours
        </p>

        <div class="text-start p-2">
          <p>
            <i class="far fa-envelope">&nbsp;&nbsp; agusszurdob@gmail.com</i>
          </p>
        </div>

        <div class="text-start p-2">
          <p><i class="far fa-phone">&nbsp;&nbsp; +549 2227 417936</i></p>
        </div>

        <div class="text-start p-2">
          <p><i class="far fa-map-pin">&nbsp;&nbsp; Buenos Aires, Arg</i></p>
        </div>

        <div class="text-center links">
            <a v-for="link in links" :key="link" :href="`${link.url}`">
              <i :class="`${link.icon}`"></i>
            </a>
        </div>
      </div>

      <!-- Form left -->
      <div class="col-8 p-3 d-flex flex-wrap justify-content-between">
        <div class="form-floating col-md-5 mb-1 needs-validation" novalidate>
          <input type="name" class="form-control" placeholder="name" required />
          <label for="floatingInput">First Name</label>
        </div>

        <div class="form-floating col-md-5 mb-1 needs-validation" novalidate>
          <input
            type="surname"
            class="form-control"
            placeholder="surname"
            required
          />
          <label for="floatingInput">Last Name</label>
        </div>

        <div class="form-floating col-md-5 mb-1 needs-validation" novalidate>
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>

        <div class="form-floating col-md-5 mb-1 needs-validation" novalidate>
          <input
            type="text"
            class="form-control"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Phone Number</label>
        </div>

        <div class="mx-auto p-1 text-center">
          <p>What the of website do you need?</p>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="option1" />
            <label class="form-check-label" for="inlineCheckbox1"
              >Web Design</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="option2" />
            <label class="form-check-label" for="inlineCheckbox2"
              >Web Development</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="option3" />
            <label class="form-check-label" for="inlineCheckbox3"
              >Logo Design</label
            >
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="option3" />
            <label class="form-check-label" for="inlineCheckbox3">Other</label>
          </div>
        </div>

        <div class="form-floating mb-2 col-12">
          <textarea placeholder="message" class="form-control"></textarea>
          <label for="floatingInput">Message</label>
        </div>

        <div class="col-12 text-end">
          <button class="btn btn-primary" disabled type="submit">
            Send Message
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Contact",
  components: {},
  data() {
    return {
      links: [
        { icon: "fab fa-facebook-f", url: "https://github.com/agusb98" },
        { icon: "fab fa-instagram", url: "https://github.com/agusb98" },
        { icon: "fab fa-github", url: "https://github.com/agusb98" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
}

.container {
  // background-color: #3c0741;
  background-color: #ebdcec;
  color: #3c0741;
}

.container,
.col-4 {
  border-radius: 0.5em;
}

.col-4 {
  color: #ebdcec;
  background-color: #3c0741;
  text-align: center;
}

.links {
  display: flex;
  justify-content: center;

  i {
    font-size: 1.8em;
    margin-right: 0.5em;
    margin-left: 0.5em;

    cursor: pointer;

    &:hover {
      color: #00afea;
      border-color: #00afea;
    }
  }
}

a {
  color: #edf2fc;
}

.form-check-input {
  cursor: pointer;
}
</style>