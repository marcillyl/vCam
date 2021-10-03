<template>
  <div>
    <Nav />
    <header class="header">
      <h1 class="header__headline">Your <span>billing</span> informations</h1>
    </header>
    <section class="container">
      <form method="POST" action="#" class="form" @submit.prevent>
        <h2 class="form__headline">Please fill the form below</h2>
        <div class="form-bloc">
          <label for="firstName"
            ><i
              class="firstName--icon fas fa-check-circle form-bloc__icon unvalid"
            ></i
            >First Name</label
          >
          <input
            class="form-bloc__input"
            type="text"
            name="firstName"
            v-model="firstName"
            required
            @input="checkText(firstName, 'firstName')"
          />
        </div>
        <div class="form-bloc">
          <label for="lastName"
            ><i
              class="lastName--icon fas fa-check-circle form-bloc__icon unvalid"
            ></i
            >Last Name</label
          >
          <input
            class="form-bloc__input"
            type="text"
            name="lastName"
            v-model="lastName"
            required
            @input="checkText(lastName, 'lastName')"
          />
        </div>
        <div class="form-bloc">
          <label for="address"
            ><i
              class="address--icon fas fa-check-circle form-bloc__icon unvalid"
            ></i
            >Address</label
          >
          <input
            class="form-bloc__input"
            type="text"
            name="address"
            v-model="address"
            required
            @input="checkAddress(address, 'address')"
          />
        </div>
        <div class="form-bloc">
          <label for="email"
            ><i
              class="email--icon fas fa-check-circle form-bloc__icon unvalid"
            ></i
            >Email</label
          >
          <input
            class="form-bloc__input"
            type="email"
            name="email"
            v-model="email"
            required
            @input="checkEmail(email, 'email')"
          />
        </div>
        <button
          :disabled="disabled == 1"
          @click="confirmPurchase"
          class="button"
        >
          Confirm Purchase
        </button>
      </form>
    </section>
    <Testimony />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Nav from '../components/Nav.vue';
import Testimony from '../components/Testimony.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'checkout',
  components: {
    Nav,
    Testimony,
    Footer,
  },
  data: function() {
    return {
      disabled: 1,
      firstName: '',
      lastName: '',
      address: '',
      email: '',
    };
  },
  methods: {
    checkText(data, field) {
      let icon = document.querySelector(`.${field}--icon`);
      if (/^[a-z à-ÿA-Z]+$/.test(data)) {
        icon.classList.remove('unvalid');
        icon.classList.add('valid');
      } else {
        icon.classList.add('unvalid');
        icon.classList.remove('valid');
      }
      this.checkForm();
    },
    checkAddress(data, field) {
      let icon = document.querySelector(`.${field}--icon`);
      if (/[a-z à-ÿA-Z]/.test(data)) {
        icon.classList.remove('unvalid');
        icon.classList.add('valid');
      } else {
        icon.classList.add('unvalid');
        icon.classList.remove('valid');
      }
      this.checkForm();
    },
    checkEmail(data, field) {
      let icon = document.querySelector(`.${field}--icon`);
      if (/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(data)) {
        icon.classList.remove('unvalid');
        icon.classList.add('valid');
      } else {
        icon.classList.add('unvalid');
        icon.classList.remove('valid');
      }
      this.checkForm();
    },
    checkForm: function() {
      if (
        /^[a-z à-ÿA-Z]+$/.test(this.firstName) &&
        /^[a-z à-ÿA-Z]+$/.test(this.lastName) &&
        /[a-z à-ÿA-Z]/.test(this.address) &&
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(this.email)
      ) {
        this.disabled = 0;
      } else {
        this.disabled = 1;
      }
    },
    confirmPurchase() {
      const order = {
        contact: {
          firstName: this.firstName,
          lastName: this.lastName,
          address: this.address,
          email: this.email,
        },
        products: [],
      };
      axios
        .post(
          'http://localhost:3000/api/cameras/order',
          JSON.stringify(order),
          {
            headers: { 'Content-type': 'application/json' },
          }
        )
        .then((response) => {
          this.$router.push(`/order/${response.data.orderId}`);
        });
      localStorage.clear();
    },
  },
};
</script>

<style scoped>
.header {
  padding: 110px 0px 40px 0px;
  display: flex;
  justify-content: center;
}
.header__headline {
  text-align: center;
  font-size: 2em;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.2em;
  letter-spacing: 0.1em;
  margin: auto;
  border: solid 10px #3a475677;
  padding: 12px 24px;
}
.header__headline span {
  color: #fc345c;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.form {
  margin: auto;
  display: flex;
  flex-direction: column;
  background: #3a475644;
  padding: 24px;
  margin: 0px 12px;
  border: solid 1.5pt #3a475677;
  box-shadow: 4px 4px 14px #000000aa;
}
.form__headline {
  margin-bottom: 24px;
  text-align: center;
  font-size: 1.3em;
  font-weight: 400;
}
.form-bloc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0px;
}
.form-bloc__input {
  width: 200px;
  padding: 7px;
  margin-left: 24px;
  background: #3a475677;
  border: solid 1pt #4a5766;
  color: white;
}
.form-bloc__icon {
  font-size: 1.2em;
  margin-right: 12px;
}
.button {
  justify-self: center;
  align-self: center;
  background: #ec244c;
  border: none;
  padding: 12px 24px;
  color: white;
  font-size: 1.1em;
  margin: 24px 0px 12px 0px;
  box-shadow: 4px 4px 14px #00000077;
}
.button:hover {
  animation: shake 200ms ease-in-out both;
}
.button:disabled {
  opacity: 0.4;
  cursor: default;
}
.button:disabled:hover {
  animation: none;
}
.unvalid {
  opacity: 0.1;
}
.valid {
  opacity: 1;
}
@media screen and (max-width: 500px) {
  .header__headline {
    font-size: 1.7em;
    margin: 0px 12px;
  }
  .form {
    width: 100%;
    max-width: 340px;
    padding: 24px 12px;
  }
  .form-bloc {
    flex-direction: column;
    align-items: flex-start;
  }
  .form-bloc__input {
    width: 100%;
    margin: 12px 0px 0px 0px;
  }
}
</style>
