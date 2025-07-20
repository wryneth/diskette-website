<template>
  <Card id="studio" class="m-5 p-15">
    <picture class="object-center">
      <source srcset="/images/studioWide.svg" media="(max-width: 200px)">
      <source srcset="/images/studioStack.svg" media="(max-width: 1200px)">
      <img src="/images/studioWide.svg" alt="Diskette Collection" style="width:auto;">
    </picture>
    <div class="font-ubuntu font-black mb-20 text-center text-4xl">All the fun stuff which makes these videos happen</div>
    <a class="object-center" href="/studio">
      <ActionButton title="Explore" class="watch-btn"/>
    </a>
  </Card>
</template>

<style scoped>

.watch-btn {
  position: absolute;
  background-color: rebeccapurple;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>