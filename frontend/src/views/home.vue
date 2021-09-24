<template>
  <div class="home">
    <Nav />
    <div class="container">
      <header>
        <img
          src="http://localhost:3000/assets/images/cameras/IMG_0035.JPG"
          alt="#"
        />
        <div class="header-text">
          <h1 class="home__headline">
            Explore <br />
            <span>+</span> Share
          </h1>
          <h2 class="home__text">
            In stimulos cum et potius stimulos erga propositum deberet fortunas
          </h2>
        </div>
      </header>
      <div class="switch">
        <p class="switch__headline">What are you looking for ?</p>
        <p class="switch__text">
          Hae duae provinciae bello quondam piratico catervis mixtae praedonum a
          Servilio pro consule missae sub iugum factae sunt vectigales. et hae
          quidem regiones velut in prominenti terrarum lingua positae ob orbe
          eoo monte Amano disparantur.
        </p>
        <div class="buttons">
          <button @click="switchToCameras()">Cameras</button>
          <button @click="switchToLenses()">Lenses</button>
        </div>
      </div>
      <section class="pane">
        <div v-if="view === 'cameras'" class="products">
          <h3 class="products__headline">Choose your camera</h3>
          <p class="products__text">
            Homines enim eruditos et sobrios ut infaustos et inutiles vitant, eo
            quoque accedente quod et nomenclatores adsueti haec et talia
            venditare, mercede accepta lucris quosdam et prandiis inserunt
            subditicios ignobiles et obscuros.
          </p>
          <ProductCard :cath="`cameras`" class="product" />
        </div>
        <div v-if="view === 'lenses'" class="products">
          <h3 class="products__headline">Choose your lense</h3>
          <p class="products__text">
            Montius nos tumore inusitato quodam et novo ut rebellis et maiestati
            recalcitrantes Augustae per haec quae strepit incusat iratus nimirum
            quod contumacem praefectum, quid rerum ordo postulat ignorare
            dissimulantem formidine tenus.
          </p>
          <ProductCard :cath="`lenses`" class="product" />
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "home",
  components: {
    Nav,
    Footer,
    ProductCard,
  },
  data: function() {
    return {
      view: "cameras",
    };
  },
  methods: {
    switchToCameras: function() {
      this.view = "cameras";
    },
    switchToLenses: function() {
      this.view = "lenses";
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
}
header img {
  position: relative;
  z-index: 0;
  opacity: 0.7;
  widows: 400px;
  height: 700px;
}
.header-text {
  position: relative;
  z-index: 10;
  background: #070e16bb;
  margin-left: -100px;
  padding: 24px;
  border: solid 12px #3a475644;
}
.home__headline {
  text-align: right;
  font-size: 5em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1em;
}
.home__headline span {
  font-size: 1.3em;
  color: #4a5766;
  text-shadow: 7px 7px 0px #1a2736ee;
}
.home__text {
  margin-top: 24px;
  text-align: left;
  font-size: 1.4em;
  letter-spacing: 0.1em;
  font-weight: 500;
  line-height: 1.5em;
  max-width: 400px;
}
header,
.switch {
  margin: auto;
  text-align: center;
  padding: 100px 0px;
}
.switch {
  background: #f5f6f8;
  box-shadow: inset 0px 0px 10px #000000aa;
  color: #5a6776aa;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
}
.switch__headline {
  text-transform: uppercase;
  background: crimson;
  color: white;
  padding: 12px 24px;
  font-size: 1em;
  letter-spacing: 0.1em;
  font-weight: 400;
  opacity: 0.77;
  box-shadow: inset 4px 4px 14px #00000044;
}
.switch__text {
  font-weight: 600;
  max-width: 500px;
  margin: 24px 0px;
  line-height: 1.7em;
}
button {
  cursor: pointer;
  margin: 12px 24px;
  padding: 12px 36px;
  border: none;
  background: #1a2736;
  color: white;
  font-size: 1em;
  letter-spacing: 0.1em;
  box-shadow: 4px 4px 14px #000000aa;
}
.products {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.products__headline {
  margin: 12px 0px;
  font-size: 1.5em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.products__text {
  max-width: 500px;
  text-align: center;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  margin: 12px 0px 24px 0px;
}
.pane {
  padding: 48px 12px;
  background: #1a2736;
  box-shadow: inset 0px 4px 10px #000000aa;
}
</style>
