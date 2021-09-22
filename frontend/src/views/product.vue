<template>
  <div class="product">
    <Nav />
    <section>
      <article>
        <img :src="product.imageUrl" alt="#" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ product.price / 100 }}</p>
        <button><i class="fas fa-cart-plus"></i></button>
      </article>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import Nav from '../components/Nav.vue';
export default {
  name: 'product',
  components: {
    Nav,
  },
  data: function() {
    return {
      id: this.$route.params.id,
      product: {},
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
  },
};
</script>

<style scoped>
img {
  width: 700px;
  height: 450px;
}
</style>
