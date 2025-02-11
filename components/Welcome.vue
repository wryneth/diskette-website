<script setup lang="ts">

</script>

<template>
  <div>
    <img class="logo" src="/images/dk-wide.svg" alt="Diskette Kitchen Logo">
  </div>
  <div class="watch-btn">
    <a href="https://youtube.com/@diskettekitchen/"><button class="bn29">Watch Now</button></a>
  </div>
  <div class="wrapper">
    <div class="gradient gradient-1"></div>
    <div class="gradient gradient-2"></div>
    <div class="gradient gradient-3"></div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,441&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Young+Serif&display=swap');

body {
  margin: 0;
  color: #fff;
  background-color: #000;
  padding: 0;
}
.watch-btn {
  margin-top: 50px;
  text-align: center;
  position: relative;
  padding-bottom: 250px;
  z-index: 1;

}

.bn29 {
  font-size: 35px;
  width: 350px;
  height: 110px;
  border: none;
  outline: none;
  color: white;
  position: relative;
  z-index: 1;
  cursor: pointer;
  background: none;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
  font-family: 'Young Serif', serif;
}

.bn29:before,
.bn29:after {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 10em;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 105%;
  height: 105%;
  content: "";
  z-index: -2;
  background-size: 400% 400%;
  background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
  );
}

.bn29:before {
  -webkit-filter: blur(7px);
  filter: blur(7px);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  -webkit-animation: pulse 10s infinite ease;
  animation: pulse 10s infinite ease;
}

.bn29:after {
  -webkit-filter: blur(0.3px);
  filter: blur(0.3px);
}

.bn29:hover:before {
  width: 115%;
  height: 115%;
}


.logo{
  width: 80vw;
  z-index: 2;
  margin: auto;
  padding-top: 350px;
  position: relative;

}
.wrapper {
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  filter: blur(150px);
}

.gradient {
  z-index: 0;
  position: absolute;
  border-radius: 100%;
  opacity: 0.6;
  mix-blend-mode: screen;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
}


.gradient-1 {
  background: rgb(255, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  width: 700px;
  height: 700px;
  animation-duration: 11s;
  opacity: 0.6;
  left: 60%;
  top: 40%;
  z-index: -2;
  animation-name: animation-gradient-1;
}
.gradient-2 {
  background: rgb(0, 255, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  width: 600px;
  height: 600px;
  animation-duration: 11s;
  opacity: 0.6;
  left: 40%;
  top: 60%;
  z-index: -1;
  animation-name: animation-gradient-2;
}
.gradient-3 {
  background: rgb(0, 0, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  width: 500px;
  height: 500px;
  animation-duration: 11s;
  opacity: 0.6;
  left: 50%;
  top: 50%;
  z-index: -3;
  animation-name: animation-gradient-3;
}

@keyframes animation-gradient-1 {
  0% {
    transform: translateY(-50%) translateX(-50%) rotate(-20deg) translateX(20%);
  }
  25% {
    transform: translateY(-50%) translateX(-50%) skew(-15deg, -15deg)
    rotate(80deg) translateX(30%);
  }
  50% {
    transform: translateY(-50%) translateX(-50%) rotate(180deg) translateX(25%);
  }
  75% {
    transform: translateY(-50%) translateX(-50%) skew(15deg, 15deg)
    rotate(240deg) translateX(15%);
  }
  100% {
    transform: translateY(-50%) translateX(-50%) rotate(340deg) translateX(20%);
  }
}

@keyframes animation-gradient-2 {
  0% {
    transform: translateY(-50%) translateX(-50%) rotate(40deg) translateX(-20%);
  }
  25% {
    transform: translateY(-50%) translateX(-50%) skew(15deg, 15deg)
    rotate(110deg) translateX(-5%);
  }
  50% {
    transform: translateY(-50%) translateX(-50%) rotate(210deg) translateX(-35%);
  }
  75% {
    transform: translateY(-50%) translateX(-50%) skew(-15deg, -15deg)
    rotate(300deg) translateX(-10%);
  }
  100% {
    transform: translateY(-50%) translateX(-50%) rotate(400deg) translateX(-20%);
  }
}

@keyframes animation-gradient-3 {
  0% {
    transform: translateY(-50%) translateX(-50%) translateX(-15%)
    translateY(10%);
  }
  20% {
    transform: translateY(-50%) translateX(-50%) translateX(20%)
    translateY(-30%);
  }
  40% {
    transform: translateY(-50%) translateX(-50%) translateX(-25%)
    translateY(-15%);
  }
  60% {
    transform: translateY(-50%) translateX(-50%) translateX(30%) translateY(20%);
  }
  80% {
    transform: translateY(-50%) translateX(-50%) translateX(5%) translateY(35%);
  }
  100% {
    transform: translateY(-50%) translateX(-50%) translateX(-15%)
    translateY(10%);
  }
}

</style>