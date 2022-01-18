<template>
  <div class="container-fluid">
    <div class="container-xxl m-auto">
      <div class="row justify-content-between">
        <div class="col-xl">
          <h1>Get In Touch</h1>
          <h2 class="my-4">
            Pregúntanos, cuéntanos qué te gustaría estudiar y nosotros te
            informaremos. ¡Estamos deseando conocerte!
          </h2>
        </div>

        <div class="col-4 my-4">
          <h3>¡Estamos en Malasaña!</h3>
          <div class="text-start">
            <p>
              <i class="far fa-envelope">&nbsp;&nbsp; agusszurdob@gmail.com</i>
            </p>
          </div>

          <div class="text-start">
            <p><i class="far fa-phone">&nbsp;&nbsp; (+549) 2227 417936</i></p>
          </div>

          <div class="text-start">
            <p><i class="far fa-map-pin">&nbsp;&nbsp; Buenos Aires, Arg</i></p>
          </div>
        </div>
      </div>

      <!--  Progress Bar  -->
      <div class="progress my-shadow mb-2" style="height: 3em">
        <div
          class="progress-bar-striped progress-bar-animated bg-success active"
          role="progressbar"
          :style="{ width: progress + '%' }"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <form v-if="progress == 1" @submit.prevent="formOne">
        <div class="contact-form row text-center justify-content-center py-4">
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

          <div class="col-6 text-end mt-3">
            <button class="btn btn-primary" type="submit">Next</button>
          </div>
        </div>
      </form>

      <form v-if="progress == 30" @submit.prevent="formTwo">
        <div class="contact-form row text-center justify-content-center">
          <div class="text-center my-3">
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

          <div class="col-6 mb-3">
            <button
              class="btn btn-primary"
              @click="
                progress = 1;
                needs = [];
              "
            >
              Previous
            </button>
          </div>

          <div class="col-6 mb-3">
            <button class="btn btn-primary" type="submit">Next</button>
          </div>
        </div>
      </form>

      <form v-if="progress == 60" @submit.prevent="formThree">
        <div class="contact-form row text-center justify-content-center my-3">
          <div class="form-floating col-9 mt-3">
            <textarea
              v-model="message"
              placeholder="message"
              class="form-control"
            ></textarea>
            <label for="floatingInput">Message</label>
          </div>

          <div class="col-6 my-3">
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

          <div class="col-6 my-3">
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
        class="success-form row text-center justify-content-center"
      >
        <div class="col-6 my-3 py-3">
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
      name: "",
      email: "",
      phone_number: "",
      needs: [],
      message: "",
      progress: 1,
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
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.container-fluid::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}

.container-fluid {
  height: 90%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

.contact-form,
.success-form {
  border-radius: 0.5em;
}

.contact-form {
  background-color: rgb(0 0 0 / 32%);
}

.contact-form:hover {
  background-color: rgb(0 0 0 / 42%);
}

.success-form {
  background-color: rgba(80, 122, 82, 0.486);
}

.success-form:hover {
  background-color: rgba(11, 78, 15, 0.486);
}

.progress {
  background-color: var(--secondary-color);
}

input {
  text-transform: uppercase;
}

@media screen and (max-width: 768px) {
  .col-4 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .form-floating {
    margin: 0.3vh;
  }

  form, .success-form {
    margin-bottom: 8vh;
  }
}
</style>