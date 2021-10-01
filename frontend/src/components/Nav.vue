<template>
  <nav class="nav">
    <router-link class="nav__link" to="/">Home</router-link>
    <router-link class="nav__link" to="/cart" :class="{ empty: empty }"
      >Cart<span v-if="!empty"></span
    ></router-link>
    <router-link class="nav__link" to="/">Find us</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data: function() {
    return {
      empty: true,
    };
  },
  mounted: function() {
    if (localStorage.length > 1) {
      this.empty = false;
    } else {
      this.empty = true;
    }
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 24px;
  background: #1a2736ee;
  box-shadow: 0px 10px 7px -7px #00000077;
}
.nav__link {
  color: white;
  margin: 0px 12px;
  letter-spacing: 0.1em;
  font-size: 15px;
  padding: 7px 12px;
  transition: background-color 140ms ease-in-out;
}
.nav__link:hover {
  background: #2a3746;
}
.nav__link span {
  display: inline-block;
  width: 4pt;
  height: 4pt;
  background: crimson;
  position: absolute;
  border-radius: 100%;
}
.empty {
  opacity: 0.3;
}
@media screen and (max-width: 600px) {
  .nav {
    justify-content: space-around;
  }
  .nav__link {
    font-size: 14px;
    margin: 0px 4px;
  }
}
</style>
