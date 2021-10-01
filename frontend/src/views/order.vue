<template>
  <div>
    <Nav />
    <header class="header">
      <h1 class="header__headline">Order complete ! <span>Thanks</span></h1>
    </header>
    <section class="container">
      <article class="infos">
        <i class="far fa-check-circle infos__icon"></i>
        <p>Order ID : {{ orderId }}</p>
      </article>
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
  name: 'order',
  components: {
    Nav,
    Testimony,
    Footer,
  },
  data: function() {
    return {
      orderId: this.$route.params.id,
    };
  },
  mounted: function() {
    console.log(this.orderId);
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
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.infos {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #3a475644;
  padding: 24px;
  border: solid 1.5pt #3a475677;
  box-shadow: 4px 4px 14px #000000aa;
}
.infos__icon {
  font-size: 2.4em;
  color: white;
  margin-bottom: 24px;
}
</style>
