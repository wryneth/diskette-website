
<template>
  <div class="card">
    <Menubar :model="items" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: 'Home',
    url: '/',

  },
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Recent Videos',
    url: '/videos',
  },
  {
    label: 'Projects',
    items: [
      {
        label: 'Diskette Case',
        url: 'https://www.printables.com/model/1073452-diskette-case-modular-open-source-nas-chassis',
      },
      {
        label: 'iPod Frame',
        url: 'https://www.printables.com/model/981437-ipod-shuffle-4th-gen-dismantled-art',
      },
    ]
  },
  {
    label: 'Collection',
    url: '/problem',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
  {
    label: 'Diskette Data',
    url: 'https://data.diskettekitchen.com',
  },
  {
    label: 'Store',
    url: 'https://store.diskettekitchen.com',
  },

]);
</script>
<style scoped>
.p-menubar {
  border-radius: 25px;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  position: fixed;
  width: 98.3vw;
  z-index: 9;

}
.p-menubar-item-label {
  border-radius: 25px;
  text-align: center;

}
</style>
