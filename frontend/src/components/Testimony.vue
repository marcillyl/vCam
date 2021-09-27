<template>
  <section class="testimony">
    <h3 class="testimony__headline">What they say about us</h3>
    <p class="testimony__text">
      "Homines enim eruditos et sobrios ut infaustos et inutiles vitant, eo
      quoque accedente quod et nomenclatores adsueti haec et talia venditare,
      mercede accepta lucris quosdam et prandiis inserunt subditicios ignobiles
      et obscuros."
    </p>
  </section>
</template>

<script>
export default {
  name: 'Testimony',
};
</script>

<style scoped>
.testimony {
  background: #f5f6f8;
  box-shadow: inset 0px 0px 10px #000000aa;
  color: #5a6776aa;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  text-align: center;
  padding: 48px 12px;
}
.testimony__headline {
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
.testimony__text {
  font-family: 'OpenSansItalic', Arial, Helvetica, sans-serif;
  max-width: 500px;
  margin: 24px 0px;
  line-height: 1.7em;
}
</style>
