<template>
  <footer>
    <section class="links">
      <router-link class="footer__link" to="/">Home</router-link>
      <router-link class="footer__link" to="/cart">Cart</router-link>
      <router-link class="footer__link" to="/">Find us</router-link>
    </section>
    <p>Designed by marcillyl</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}
.footer__link {
  color: white;
}
</style>
