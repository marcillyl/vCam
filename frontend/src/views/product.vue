<template>
  <div class="product">
    <Nav />
    <section class="container">
      <article>
        <img :src="product.imageUrl" alt="#" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ `${product.price / 100}€` }}</p>
        <select name="lense" id="lense" @change="getLense($event)">
          <option value="null">Select a lense</option>
          <option v-for="lense in product.lenses" :key="lense">{{
            lense
          }}</option>
        </select>
        <button @click="addToCart()"><i class="fas fa-cart-plus"></i></button>
      </article>
    </section>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "product",
  components: {
    Nav,
    Footer,
  },
  data: function() {
    return {
      id: this.$route.params.id,
      product: {},
      lense: "",
    };
  },
  mounted: function() {
    this.getCamera();
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
      if (this.lenseIncluded(cartContent, this.lense) === true) {
        for (let product of cartContent) {
          if (product.lense === this.lense) {
            product.quantity++;
          }
        }
      } else {
        let product = {
          lense: this.lense,
          quantity: 1,
        };
        cartContent.push(product);
      }
    },
    addToCart() {
      let self = this;
      let cartContent = JSON.parse(localStorage.getItem(this.id));
      if (cartContent === null) {
        let cart = [];
        let product = {
          lense: self.lense,
          quantity: 1,
        };
        cart.push(product);
        localStorage.setItem(this.id, JSON.stringify(cart));
      } else {
        this.checkLense(cartContent);
        localStorage.setItem(this.id, JSON.stringify(cartContent));
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 700px;
  height: 450px;
}
</style>
