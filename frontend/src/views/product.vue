<template>
  <div>
    <nav class="nav">
      <router-link class="nav__link" to="/">Home</router-link>
      <router-link class="nav__link" to="/cart" :class="{ empty: empty }"
        >Cart<span v-if="!empty"></span
      ></router-link>
      <router-link class="nav__link" to="/">Find us</router-link>
    </nav>
    <div class="container">
      <article class="product">
        <img :src="product.imageUrl" alt="#" class="product__img" />
        <div class="product-infos">
          <div>
            <h3 class="product-infos__headline">{{ product.name }}</h3>
            <p class="product-infos__text">{{ product.description }}</p>
            <p class="product-infos__price">{{ `${product.price / 100}€` }}</p>
          </div>
          <div>
            <select
              name="lense"
              id="lense"
              @change="getLense($event)"
              class="product-infos__select"
            >
              <option value="">Select a lense</option>
              <option v-for="lense in product.lenses" :key="lense">{{
                lense
              }}</option>
            </select>
            <button
              @click="addToCart()"
              :disabled="disabled"
              class="product-infos__button"
            >
              <i class="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </article>
    </div>
    <Testimony />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Testimony from '../components/Testimony.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'product',
  components: {
    Testimony,
    Footer,
  },
  data: function() {
    return {
      id: this.$route.params.id,
      product: {},
      lense: '',
      empty: true,
    };
  },
  mounted: function() {
    if (localStorage.length > 1) {
      this.empty = false;
    } else {
      this.empty = true;
    }
    this.getCamera();
  },
  computed: {
    disabled() {
      if (this.lense === '') {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    getCamera() {
      axios
        .get(`http://localhost:3000/api/cameras/${this.id}`)
        .then((response) => {
          this.product = response.data;
        });
    },
    getLense(event) {
      this.lense = event.target.value;
    },
    lenseIncluded(cartContent, lense) {
      for (let product of cartContent) {
        if (product.lense === lense) {
          return true;
        }
      }
      return false;
    },
    checkLense(cartContent) {
      const self = this;
      if (this.lenseIncluded(cartContent, this.lense) === true) {
        for (let product of cartContent) {
          if (product.lense === this.lense) {
            product.quantity++;
          }
        }
      } else {
        let product = {
          name: self.product.name,
          imageUrl: self.product.imageUrl,
          price: self.product.price,
          lense: self.lense,
          quantity: 1,
        };
        cartContent.push(product);
      }
    },
    addToCart() {
      const self = this;
      let cartContent = JSON.parse(localStorage.getItem(this.id));
      if (this.lense != '') {
        if (cartContent === null) {
          let cart = [];
          let product = {
            name: self.product.name,
            imageUrl: self.product.imageUrl,
            price: self.product.price,
            lense: self.lense,
            quantity: 1,
          };
          cart.push(product);
          localStorage.setItem(this.id, JSON.stringify(cart));
          this.empty = false;
        } else {
          this.checkLense(cartContent);
          localStorage.setItem(this.id, JSON.stringify(cartContent));
          this.empty = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 24px;
  background: #1a2736ee;
  box-shadow: 0px 10px 7px -7px #00000077;
}
.nav__link {
  color: white;
  margin: 0px 24px;
  letter-spacing: 0.1em;
  font-size: 15px;
}
.nav__link span {
  display: inline-block;
  width: 4pt;
  height: 4pt;
  background: crimson;
  position: absolute;
  border-radius: 100%;
}
.empty {
  opacity: 0.3;
}
@media screen and (max-width: 600px) {
  .nav {
    justify-content: space-around;
  }
  .nav__link {
    font-size: 14px;
    margin: 0px 10px;
  }
}
.container {
  padding: 100px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product {
  display: flex;
  flex-direction: column;
  background: #3a475644;
  padding: 24px;
  border: solid 1.5pt #3a475644;
  box-shadow: 4px 4px 14px #000000aa;
}
.product__img {
  width: 700px;
  height: 450px;
  box-shadow: 4px 4px 14px #000000aa;
  border: solid 1.5pt #4a5766;
  margin-bottom: 24px;
}
.product-infos {
  display: flex;
  justify-content: space-between;
}
.product-infos > :nth-child(2) {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.product-infos__headline {
  font-size: 1.7em;
  font-weight: 300;
}
.product-infos__text {
  max-width: 400px;
  margin: 12px 0px;
  line-height: 1.7em;
}
.product-infos__price {
  font-size: 1.2em;
}
.product-infos__select,
.product-infos__button {
  align-self: flex-end;
  border: none;
  padding: 12px 24px;
  margin: 12px 0px;
  background: #3a4756;
  color: white;
}
.product-infos__button {
  background: #ec244c;
  font-size: 1.4em;
  padding: 10px 24px;
  width: 140px;
}
.product-infos__button:hover {
  animation: shake 200ms ease-in-out both;
}
.product-infos__button:disabled {
  opacity: 0.4;
  cursor: default;
}
.product-infos__button:disabled:hover {
  animation: none;
}
@media screen and (max-width: 800px) {
  .product__img {
    width: 100%;
    height: 350px;
  }
  .product-infos__text {
    max-width: 270px;
  }
}
@media screen and (max-width: 600px) {
  .product__img {
    height: 300px;
  }
  .product {
    padding: 12px;
  }
  .product-infos {
    flex-direction: column;
  }
  .product-infos__text {
    max-width: unset;
  }
  .product-infos__button {
    font-size: 1.3em;
  }
}
</style>
