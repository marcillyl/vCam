<template>
  <section class="container">
    <article class="card" v-for="product in products" :key="product.id">
      <router-link :to="`/product/${product._id}`">
        <img :src="product.imageUrl" alt="#" class="card__img" />
        <h4 class="card__headline">{{ product.name }}</h4>
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
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.card {
  margin: 24px;
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
.card__img {
  width: 350px;
  height: 250px;
  background: white;
  opacity: 0.77;
  transition: opacity 140ms ease-in-out;
}
.card__headline {
  font-weight: 500;
  font-size: 1.2em;
  text-align: center;
  margin: 0px auto;
  padding: 12px 24px;
  background: #171e26;
  color: white;
}
@media screen and (max-width: 500px) {
  .card {
    margin: 12px 0px;
  }
  .card__img {
    width: 300px;
    height: 200px;
  }
}
</style>
