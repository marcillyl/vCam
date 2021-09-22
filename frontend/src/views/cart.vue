<template>
  <div class="cart">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'cart',
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
