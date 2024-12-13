
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
    url: '#',

  },
  {
    label: 'Recent Videos',
    url: '#videos',
  },
  {
    label: 'About',
    url: '#about',
  },
  {
    label: 'Collection',
    url: '#problem',
  },
  {
    label: 'Projects',
    url: '#projects',

  },
  {
    label: 'Contact',
    items: [
      {
        label: 'E-Mail',
        url: 'mailto:diskette@diskettekitchen.com',
      },
      {
        label: 'Instagram DM',
        url: 'https://ig.me/m/diskettekitchen',
      },
      {
        label: 'Bluesky DM',
        url: 'https://bsky.app/profile/diskettekitchen.com',
      },
    ]
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
