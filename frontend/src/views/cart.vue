<template>
  <div>
    <Nav />
    <header class="header">
      <h1 class="header__headline">Your <span>cart</span> content</h1>
    </header>
    <section v-if="!empty" class="container">
      <div v-for="product in cart" :key="product" class="cart">
        <article class="cart-product">
          <div></div>
          <h3 class="cart-product__headline">Product</h3>
          <p>Lense</p>
          <p>Quantity</p>
        </article>
        <article v-for="item in product" :key="item" class="cart-product">
          <img
            class="cart-product__img"
            :src="item.imageUrl"
            aria-multiline="#"
          />
          <h3 class="cart-product__headline">{{ item.name }}</h3>
          <p>{{ item.lense }}</p>
          <p>{{ item.quantity }}</p>
        </article>
      </div>
      <p class="container__text container__text--price">
        Total price : {{ total }} €
      </p>
      <router-link to="/checkout" class="checkout">
        <button class="button button--checkout">Checkout</button>
      </router-link>
      <button class="button" @click="clearCart()">Clear cart</button>
      <p class="container__text">
        <router-link to="/" class="link">Continue shopping</router-link>
      </p>
    </section>
    <section v-else class="container">
      <p class="container__text">
        Your cart is empty !
        <router-link to="/" class="link">Start shopping now</router-link>
      </p>
    </section>
    <Testimony />
    <Footer />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Testimony from '../components/Testimony.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'cart',
  components: {
    Nav,
    Testimony,
    Footer,
  },
  data: function() {
    return {
      cart: [],
      total: 0,
    };
  },
  computed: {
    empty() {
      if (this.cart.length > 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted: function() {
    for (let item of Object.keys(localStorage)) {
      if (item) {
        let product = localStorage[item];
        if (product != 'SILENT') this.cart.push(JSON.parse(product));
      }
    }
    this.getTotalPrice();
  },
  methods: {
    getTotalPrice() {
      const self = this;
      for (let product of this.cart) {
        for (let item of product) {
          self.total += item.quantity * item.price;
        }
      }
      self.total /= 100;
    },
    clearCart() {
      localStorage.clear();
      this.$router.go();
    },
  },
};
</script>

<style scoped>
.header {
  padding: 110px 0px 40px 0px;
  display: flex;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 12px 48px 12px;
}
.container__text {
  margin-top: 24px;
}
.container__text--price {
  font-size: 1.1em;
  margin-bottom: 24px;
}
.cart {
  margin-bottom: 12px;
  border: solid 1pt #3a4756;
  box-shadow: 4px 4px 14px #000000aa;
}
.cart-product {
  display: grid;
  grid-template-columns: 140px 170px 170px 100px;
  justify-content: center;
  align-items: center;
  background: #1a2736;
  color: white;
  padding: 12px 0px;
}
.cart-product__headline {
  font-weight: 400;
}
.cart-product :nth-child(n) {
  margin: 0px 12px;
}
.cart-product__img {
  width: 100px;
  height: 70px;
  border: solid 1.5pt white;
}
.button {
  justify-self: flex-end;
  background: #2a3746;
  border: none;
  padding: 12px 24px;
  width: 170px;
  color: white;
  font-size: 1.1em;
  margin: 12px 0px;
  box-shadow: 4px 4px 14px #000000aa;
}
.button:hover {
  animation: shake 200ms ease-in-out both;
}
.button--checkout {
  background: #ec244c;
}
.button--checkout:disabled {
  opacity: 0.4;
  cursor: default;
}
.button--checkout:disabled:hover {
  animation: none;
}
.link {
  color: white;
  padding-bottom: 3px;
  border-bottom: solid 1pt white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 14px;
}
</style>
