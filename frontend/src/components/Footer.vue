<template>
  <footer class="footer">
    <section class="footer-links">
      <router-link class="footer-links__link" to="/">Home</router-link>
      <router-link class="footer-links__link" to="/cart">Cart</router-link>
      <router-link class="footer-links__link" to="/">Find us</router-link>
    </section>
    <p class="footer-legal">Designed by Luc Marcilly</p>
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
.footer-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}
.footer-links__link {
  color: white;
  letter-spacing: 0.1em;
  padding: 7px 12px;
  transition: background-color 140ms ease-in-out;
}
.footer-links__link:hover {
  background: #1a2736;
}
.footer-legal {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #4a5766;
  font-size: 14px;
}
</style>
