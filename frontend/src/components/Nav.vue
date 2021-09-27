<template>
  <nav>
    <router-link class="nav__link" to="/">Home</router-link>
    <router-link class="nav__link" to="/cart">Cart</router-link>
    <router-link class="nav__link" to="/">Find us</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style scoped>
nav {
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 24px;
  background: #1a2736dd;
}
.nav__link {
  color: white;
  margin: 0px 24px;
  letter-spacing: 0.1em;
}
</style>
