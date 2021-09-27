<template>
  <div class="product">
    <Nav />
    <div class="container">
      <article>
        <img :src="product.imageUrl" alt="#" />
        <div class="bottom">
          <div class="left">
            <h3 class="product__headline">{{ product.name }}</h3>
            <p class="product__text">{{ product.description }}</p>
            <p class="product__price">{{ `${product.price / 100}€` }}</p>
          </div>
          <div class="right">
            <select
              name="lense"
              id="lense"
              @change="getLense($event)"
              class="select"
            >
              <option value="null">Select a lense</option>
              <option v-for="lense in product.lenses" :key="lense">{{
                lense
              }}</option>
            </select>
            <button @click="addToCart()" class="button">
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
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Testimony from '../components/Testimony.vue';
export default {
  name: 'product',
  components: {
    Nav,
    Footer,
    Testimony,
  },
  data: function() {
    return {
      id: this.$route.params.id,
      product: {},
      lense: '',
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
.container {
  padding: 100px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
article {
  display: flex;
  flex-direction: column;
  background: #3a475644;
  padding: 24px;
  border: solid 1.5pt #3a475644;
  box-shadow: 4px 4px 14px #000000aa;
}
img {
  box-shadow: 4px 4px 14px #000000aa;
  border: solid 1.5pt #4a5766;
  margin-bottom: 24px;
}
.bottom {
  display: flex;
  justify-content: space-between;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.product__headline {
  font-size: 1.4em;
  color: blanchedalmond;
}
.product__text {
  max-width: 400px;
  margin: 12px 0px;
  line-height: 1.7em;
}
.product__price {
  font-size: 1.2em;
  color: blanchedalmond;
}
.select,
.button {
  align-self: flex-end;
  background: transparent;
  border: none;
  padding: 12px 24px;
  color: white;
  margin: 12px 0px;
  background: #3a4756;
}
</style>
