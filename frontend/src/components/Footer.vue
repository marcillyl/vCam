<template>
  <footer class="footer">
    <section class="footer-links">
      <router-link class="footer-links__link" to="/">Home</router-link>
      <router-link class="footer-links__link" to="/cart">Cart</router-link>
      <router-link class="footer-links__link" to="/">Find us</router-link>
    </section>
    <p class="footer-legal">Designed by marcillyl</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
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
  margin: 4px 0px;
  color: white;
  letter-spacing: 0.1em;
}
.footer-legal {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #4a5766;
  font-size: 14px;
}
</style>
