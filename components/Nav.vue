
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
  },
  {
    label: 'About',
  },
  {
    label: 'Recent Videos',
  },
  {
    label: 'Projects',
    items: [
      {
        label: 'Diskette Case',
      },
      {
        label: 'iPod Frame',
      },
    ]
  },
  {
    label: 'Collection',
  },
  {
    label: 'Diskette Data',
  },
  {
    label: 'Store',
  },
  {
    label: 'Contact',
  }
]);
</script>
<style scoped>
.p-menubar {
  border-radius: 25px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  position: fixed;
  width: 98.9vw;
  z-index: 9;

}
.p-menubar-item-label {
  border-radius: 25px;
  text-align: center;

}
</style>
