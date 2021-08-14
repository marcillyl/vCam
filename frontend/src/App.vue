<template>
  <HelloWorld msg="" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
@font-face {
  font-family: "OpenSans";
  src: url("./assets/Fonts/Open_Sans/OpenSans-Light.ttf") format("truetype");
  font-weight: 300;
}
@font-face {
  font-family: "OpenSans";
  src: url("./assets/Fonts/Open_Sans/OpenSans-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "OpenSans";
  src: url("./assets/Fonts/Open_Sans/OpenSans-SemiBold.ttf") format("truetype");
  font-weight: 600;
}
@font-face {
  font-family: "OpenSans";
  src: url("./assets/Fonts/Open_Sans/OpenSans-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "OpenSans";
  src: url("./assets/Fonts/Open_Sans/OpenSans-ExtraBold.ttf") format("truetype");
  font-weight: 800;
}
#app {
  font-family: "OpenSans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
}
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  min-width: 320px;
}
img {
  object-fit: cover;
}
a {
  cursor: pointer;
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  cursor: default;
}
</style>
