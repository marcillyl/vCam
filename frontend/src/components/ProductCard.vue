<template>
  <section>
    <article class="card" v-for="product in products" :key="product.id">
      <router-link :to="`/product/${product._id}`">
        <img :src="product.imageUrl" alt="#" />
        <h4 class="product__name">{{ product.name }}</h4>
        <!-- <p>{{ product.description }}</p> -->
        <!-- <p>{{ product.price / 100 }}</p> -->
      </router-link>
    </article>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductCard",
  props: ["cath"],
  data: function() {
    return {
      products: null,
    };
  },
  mounted: function() {
    if (this.cath === "cameras") {
      this.getCameras();
    } else {
      // this.getLenses();
    }
  },
  methods: {
    getCameras() {
      axios.get("http://localhost:3000/api/cameras/").then((response) => {
        this.products = response.data;
      });
    },
    // getLenses() {
    //   axios.get('http://localhost:3000/api/lenses/').then((response) => {
    //     this.products = response.data;
    //   });
    // },
  },
};
</script>

<style scoped>
@media screen and (max-width: 540px) {
  img {
    width: 100%;
  }
}
img {
  width: 400px;
  height: 300px;
  background: bisque;
  opacity: 0.77;
  transition: opacity 140ms ease-in-out;
}
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.card {
  margin: 12px;
  padding: 12px 12px 12px 12px;
  background: white;
  box-shadow: 4px 4px 14px #000000aa;
  transition: transform 140ms ease-in-out;
}
.card:hover {
  transform: translate(4px, 4px);
}
.card:hover img {
  opacity: 1;
}
.product__name {
  font-weight: 500;
  font-size: 1.3em;
  text-align: center;
  margin: 0px auto;
  padding: 12px 24px;
  background: #171e26;
  color: blanchedalmond;
}
</style>
