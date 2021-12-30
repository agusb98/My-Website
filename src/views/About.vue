<template>
  <div class="container-fluid p-5">
    <div class="container-xxl">
      <div class="row justify-content-between pt-4">
        <div class="col-xl">
          <h1>¡Contacta con M.AD!</h1>
          <h2>
            Pregúntanos, cuéntanos qué te gustaría <br />
            estudiar y nosotros te informaremos. ¡Estamos <br />
            deseando conocerte!
          </h2>
        </div>

        <div class="col-4">
          <h3>¡Estamos en Malasaña!</h3>
          <div class="text-start p-2">
            <p>
              <i class="far fa-envelope">&nbsp;&nbsp; agusszurdob@gmail.com</i>
            </p>
          </div>

          <div class="text-start p-2">
            <p><i class="far fa-phone">&nbsp;&nbsp; (+549) 2227 417936</i></p>
          </div>

          <div class="text-start p-2">
            <p><i class="far fa-map-pin">&nbsp;&nbsp; Buenos Aires, Arg</i></p>
          </div>
        </div>
      </div>

      <!--  Progress Bar  -->
      <div class="row-3 mt-2 p-4 text-center justify-content-center">
        <div class="progress my-shadow" style="height: 3em">
          <div
            class="progress-bar-striped bg-success"
            role="progressbar"
            :style="{ width: progress + '%' }"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <form v-if="progress == 0" @submit.prevent="formOne">
        <div
          class="
            contact-form
            row
            mt-2
            p-2
            pt-5 pt-5
            text-center
            justify-content-center
          "
        >
          <div class="form-floating col-md-3">
            <input
              type="text"
              class="form-control"
              placeholder="name"
              v-model="name"
            />
            <label for="floatingInput">Name</label>
          </div>

          <div class="form-floating col-md-3">
            <input
              type="text"
              class="form-control"
              placeholder="name@example.com"
              v-model="email"
            />
            <label for="floatingInput">Email</label>
          </div>

          <div class="form-floating col-md-3">
            <input
              type="text"
              class="form-control"
              placeholder="name@example.com"
              v-model="phone_number"
            />
            <label for="floatingInput">Phone Number</label>
          </div>

          <div class="col-6 mt-4 text-end">
            <button class="btn btn-primary" type="submit">Next</button>
          </div>
        </div>
      </form>

      <form v-if="progress == 30" @submit.prevent="formTwo">
        <div
          class="
            contact-form
            row
            mt-2
            p-2
            pt-4
            text-center
            justify-content-center
          "
        >
          <div class="mx-auto pt-3 text-center">
            <h3>What the of website do you need?</h3>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="needs"
                value="Web Design"
              />
              <label class="form-check-label">Web Design</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="needs"
                value="Web Development"
              />
              <label class="form-check-label">Web Development</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="needs"
                value="Logo Design"
              />
              <label class="form-check-label">Logo Design</label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="needs"
                value="Other"
              />
              <label class="form-check-label">Other</label>
            </div>
          </div>

          <div class="col-6 mt-4">
            <button
              class="btn btn-primary"
              @click="
                progress = 0;
                needs = [];
              "
            >
              Previous
            </button>
          </div>

          <div class="col-6 mt-4">
            <button class="btn btn-primary" type="submit">Next</button>
          </div>
        </div>
      </form>

      <form v-if="progress == 60" @submit.prevent="formThree">
        <div
          class="
            contact-form
            row
            mt-2
            p-2
            pt-5
            text-center
            justify-content-center
          "
        >
          <div class="form-floating mb-2 col-9">
            <textarea
              v-model="message"
              placeholder="message"
              class="form-control"
            ></textarea>
            <label for="floatingInput">Message</label>
          </div>

          <div class="col-6 mt-4">
            <button
              class="btn btn-primary"
              @click="
                progress = 30;
                message = '';
              "
              type="submit"
            >
              Previous
            </button>
          </div>

          <div class="col-6 mt-4">
            <button
              class="btn btn-primary"
              @click="progress = 60"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>

      <div
        v-if="progress == 100"
        class="
          success-form
          row
          mt-2
          p-2
          pt-5
          text-center
          justify-content-center
        "
      >
        <div class="col-6 mt-4 pb-5">
          <h3><i class="fas fa-check-circle"></i> Message sended</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      name: "Agustin",
      email: "agus@gmail.com",
      phone_number: "2227417936",
      needs: [],
      message: "",
      progress: 0,
    };
  },
  methods: {
    formOne() {
      var result =
        this.checkName() && this.checkEmail() && this.checkPhoneNumber();

      if (result) {
        this.progress = 30;
      }

      return result;
    },

    formTwo() {
      var result = this.checkNeeds();

      if (result) {
        this.progress += 30;
      }

      return result;
    },

    formThree() {
      var result = this.checkMessage();

      if (result) {
        this.progress += 40;
      }

      return result;
    },

    checkName() {
      if (!this.name) {
        alert("Enter Name");
        return false;
      } else if (this.name.length < 2) {
        alert("Invalid Name");
        return false;
      } else if (this.name.length > 30) {
        alert("Invalid Name");
        return false;
      } else if (!this.name.match("[a-zA-Z ñ]+$")) {
        alert("Invalid Name");
        return false;
      }
      return true;
    },

    checkEmail() {
      var phoneno = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

      if (!this.email) {
        alert("Enter Email");
        return false;
      }
      if (this.email.length > 35) {
        alert("Invalid Email");
        return false;
      } else if (!this.email.match(phoneno)) {
        alert("Invalid Email");
        return false;
      }
      return true;
    },

    checkPhoneNumber() {
      var phoneno = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im;

      if (!this.phone_number) {
        alert("Enter Phone Number4");
        return false;
      } else if (!this.phone_number.match(phoneno)) {
        alert("Invalid Phone Number");
        return false;
      }
      return true;
    },

    checkNeeds() {
      if (this.needs.length == 0) {
        alert("Select one");
        return false;
      }
      return true;
    },

    checkMessage() {
      if (!this.message) {
        alert("Enter Message");
        return false;
      } else if (this.message.length < 2) {
        alert("Invalid Message");
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
.container-fluid {
  height: 92%;
}

.contact-form,
.success-form {
  border-radius: 0.5em;
}

.contact-form:hover {
  background-color: rgba(8, 8, 8, 0.486);
}

.success-form:hover {
  background-color: rgba(11, 78, 15, 0.486);
}

.progress {
  background-color: var(--secondary-color);
}

.progress .progress-bar {
  transition: unset;
}

.progress-bar {
    -webkit-transition: width 7s !important;
    transition: width 7s !important;
}

input {
  text-transform: uppercase;
}
</style>