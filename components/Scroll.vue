<template>
  <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <h1 class="slide-text"></h1>
      </div>
      <div class="slide">
        <h1 class="slide-text">Mods</h1>
      </div>

      <div class="slide">
        <h1 class="slide-text">Repairs</h1>
      </div>

      <div class="slide">
        <h1 class="slide-text">Vintage</h1>
      </div>

      <div class="slide">
        <h1 class="slide-text">New</h1>
      </div>

      <div class="slide">
        <h1 class="slide-text">Rants</h1>
      </div>

      <div class="slide">
        <h1 class="slide-text">iPods</h1>
      </div>

      <div class="slide">
        <h1 class="slide-text">Linux</h1>
      </div>

      <div class="slide">
        <h1 class="slide-text">3D</h1>
      </div>

      <div class="slide">
        <h1 class="slide-text">Opinions</h1>
      </div>

      <div class="slide">
        <h1 class="slide-text">Frogs</h1>
      </div>

      <div class="slide">
        <h1 class="slide-text">FreeBSD</h1>
      </div>

      <div class="slide">
        <h1 class="slide-text">Keyboards</h1>
      </div>

      <div class="slide">
        <h1 class="slide-text">Audio</h1>
      </div>

      <div class="slide">
        <h1 class="slide-text">Lighting</h1>
      </div>

      <div class="slide">
        <h1 class="slide-text">AUTISM</h1>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

$animationSpeed: 40s;

// Animation
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 7))}
}


.slider {
  background: #89185C;
  box-shadow: 0 10px 20px -5px 00000;
  height: 100px;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 2;
  }

  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
  }

  .slide {
    height: 100px;
    width: 500px;
  }

  .slide-text {
    margin-top: 20px;
    font-family: "Ubuntu", sans-serif;
    font-size: 40px;
    margin-left: 80px;
    margin-right: 80px;
    display: inline-block;
  }
</style>