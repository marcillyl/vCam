<template>
  <div class="home">
    <Nav />
    <h1 class="home__headline">Metu cuncta progrediar metu quod.</h1>
    <h2 class="home__text">
      In stimulos cum et potius stimulos erga propositum deberet fortunas.
    </h2>
    <div>
      <p>Choose a product line</p>
      <div>
        <button @click="switchToCameras()">Cameras</button>
        <button @click="switchToLenses()">Lenses</button>
      </div>
    </div>
    <section class="products">
      <div v-if="view === 'cameras'">
        <h3>Cameras</h3>
        <ProductCard :cath="`cameras`" />
      </div>
      <div v-if="view === 'lenses'">
        <h3>Lenses</h3>
        <ProductCard :cath="`lenses`" />
      </div>
    </section>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import ProductCard from '../components/ProductCard.vue';
export default {
  name: 'home',
  components: {
    Nav,
    ProductCard,
  },
  data: function() {
    return {
      view: 'cameras',
    };
  },
  methods: {
    switchToCameras: function() {
      this.view = 'cameras';
    },
    switchToLenses: function() {
      this.view = 'lenses';
    },
  },
};
</script>

<style scoped></style>
