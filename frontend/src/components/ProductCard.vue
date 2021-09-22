<template>
  <section>
    <article class="card" v-for="product in products" :key="product.id">
      <router-link :to="`/product/${product._id}`">
        <img :src="product.imageUrl" alt="#" />
        <h4>{{ product.name }}</h4>
        <!-- <p>{{ product.description }}</p> -->
        <!-- <p>{{ product.price / 100 }}</p> -->
      </router-link>
    </article>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ProductCard',
  props: ['cath'],
  data: function() {
    return {
      products: null,
    };
  },
  mounted: function() {
    if (this.cath === 'cameras') {
      this.getCameras();
    } else {
      // this.getLenses();
    }
  },
  methods: {
    getCameras() {
      axios.get('http://localhost:3000/api/cameras/').then((response) => {
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
img {
  width: 400px;
  height: 300px;
}
</style>
