<script setup lang="ts">

</script>
<template>
  <div id="problem">
    <img class="collect-bg" src="/images/disk-tile.png" alt="">
  </div>
  <div>
    <h1 class="collect-txt">I've got lots of interesting stuff here</h1>
  </div>
  <div class="collect-btn">
    <a href="/collection">
      <button class="bn29">Explore the Collection</button>
    </a>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,441&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Young+Serif&display=swap');

.collect-btn {
  margin-top: 50px;
  text-align: center;
  position: relative;
  z-index: 1;
  margin-bottom: 100px;
}

.collect-bg {
  width: 100vw;
  position: absolute;
  z-index: -1;
}

.collect-txt {
  margin: auto;
  text-align: center;
  font-size: 85px;
  font-family: "Young Serif";
  margin-top: 75px;
  width: 75vw;
  z-index: 2;
  position: relative;
  color: white;
}

.bn29 {
  font-size: 35px;
  width: 450px;
  height: 110px;
  border: none;
  outline: none;
  color: white;
  position: relative;
  z-index: 1;
  cursor: pointer;
  background: none;
  font-family: 'Young Serif', serif;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
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

.wrapper {
  z-index: 0;
  position: absolute;
}

</style>