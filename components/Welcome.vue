<template>
  <div class="welcome">
    <img class="logo" src="/images/dk-wide.png" alt="Diskette Kitchen Logo">
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Young+Serif&display=swap');

.welcome {
  height: 95vh;
}
.logo {
  position: relative;
  width: 75vw;
  margin: 0 auto;
  display: flex;
}
html {
  height:100%;
}

body {
  margin:0;
}
.watch-btn {
  position:relative;
  font-size: 20px;
  height: 70px;
  width: 10vw;
  font-family: 'Young Serif', sans-serif;
  margin: 0 auto;
}
.bg {
  animation:slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #282D27 50%, #16274A 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top:0;
  z-index:-1;
  height: 100vh;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:4s;
}

.bg3 {
  animation-duration:5s;
}

.content {
  background-color:rgba(255,255,255,.8);
  border-radius:.25em;
  box-shadow:0 0 .25em rgba(0,0,0,.25);
  box-sizing:border-box;
  left:50%;
  padding:10vmin;
  position:fixed;
  text-align:center;
  top:50%;
  transform:translate(-50%, -50%);
}

h1 {
  font-family:monospace;
}

@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}
</style>
<script setup lang="ts">
</script>