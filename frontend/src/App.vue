<template>
  <div>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
    />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@font-face {
  font-family: 'OpenSans';
  src: url('./assets/Fonts/Open_Sans/OpenSans-Light.ttf') format('truetype');
  font-weight: 300;
}
@font-face {
  font-family: 'OpenSans';
  src: url('./assets/Fonts/Open_Sans/OpenSans-Regular.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family: 'OpenSans';
  src: url('./assets/Fonts/Open_Sans/OpenSans-SemiBold.ttf') format('truetype');
  font-weight: 600;
}
@font-face {
  font-family: 'OpenSansItalic';
  src: url('./assets/Fonts/Open_Sans/OpenSans-Italic.ttf') format('truetype');
  font-weight: 600;
}
@font-face {
  font-family: 'OpenSans';
  src: url('./assets/Fonts/Open_Sans/OpenSans-Bold.ttf') format('truetype');
  font-weight: 700;
}
@font-face {
  font-family: 'OpenSans';
  src: url('./assets/Fonts/Open_Sans/OpenSans-ExtraBold.ttf') format('truetype');
  font-weight: 800;
}
#app {
  font-family: 'OpenSans', Avenir, Helvetica, Arial, sans-serif;
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
body {
  background: #070e16;
  color: white;
}
img {
  object-fit: cover;
}
a {
  cursor: pointer;
  text-decoration: none;
}
button,
select {
  cursor: pointer;
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
@keyframes shake {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(-4px);
  }
  50% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(4px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
