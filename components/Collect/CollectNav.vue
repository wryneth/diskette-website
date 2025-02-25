<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
  {
    label: 'Desktop',
    url: '#desktop',
  },
  {
    label: 'Laptop',
    url: '#laptop',
  },
  {
    label: 'Keyboards',
    url: '#keebs',
  },
  {
    label: 'Audio',
    url: '#audio',
  },
  {
    label: 'Other',
    url: '#misc',
  }
]);
</script>


<template>
  <div class="card">
    <Menubar :model="items">r
      <template #start>
        <a href="/">
          <img src="/images/unity-small.png" height="55" width="55" alt="Diskette Unity logo"/>
        </a>
      </template>
      <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span>{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
      </template>
    </Menubar>
  </div>
</template>


<style scoped>
.p-menubar {
  float: right;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 40px;
  z-index: 5;
  position: fixed;
  width: 520px;
  text-align: center;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: 5px 5px 20px #89185C;
  transition: transform 0.3s ease-in-out;

}
.p-menubar:hover{
  transform: translate(-50%, 0) scale(1.03);
}

.social-btns {
  margin-left: 2px;
  margin-right: 2px;
  border-radius: 10px;
}
</style>