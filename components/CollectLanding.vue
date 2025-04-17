<template>
  <div id="collect" class="contain">
    <picture class="object-center">
      <source srcset="/images/collect.svg" media="(max-width: 200px)">
      <source srcset="/images/collect-stacked.svg" media="(max-width: 1200px)">
      <img src="/images/collect.svg" alt="Diskette Collection" style="width:auto;">
    </picture>
    <div class="font-calistoga mb-10 text-center text-6xl">All. Of. My. Shit.</div>
    <a class="object-center" href="/collection">
      <ActionButton title="Explore" class="watch-btn"/>
    </a>
  </div>
</template>

<style scoped>


.watch-btn {
  position: absolute;
  background-color: rebeccapurple;
  left: 50%;
  margin-top: 45px;
  transform: translate(-50%, -50%);

}
.contain {
  width: 100%;
  transform: scale(0.8);
  margin-bottom: 150px;
}
</style>