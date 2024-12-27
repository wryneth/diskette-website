<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
  {
    label: 'Videos',
    url: '#videos',
  },
  {
    label: 'About',
    url: '#about',
  },
  {
    label: 'Projects',
    url: '#projects',
  },
//  {
//    label: 'Collection',
//    url: '#problem',
//  },
  {
    label: 'Contact',
    url: '#contact',
  },
  {
    label: 'Store',
    url: 'http://store.diskettekitchen.com/',
  },
  {
    label: 'Data',
    url: 'http://data.diskettekitchen.com/',
  },
]);
</script>


<template>
  <div class="card">
    <Menubar :model="items">
      <template #start>
        <a href="#">
          <img src="../public/images/click.png" height="50" width="50" alt="Diskette Kitchen click wheel"/>
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
      <template #end>
        <div class="flex items-center gap-2">
          <div>
            <a href="https://youtube.com/@diskettekitchen">
              <UButton class="social-btns"
                       :padded="true"
                       icon="grommet-icons:youtube"
                       size="sm"
                       color="red"
                       square
                       variant="solid"
                       aria-label="YouTube"
              />
            </a>

            <a href="https://bsky.app/profile/diskettekitchen.com">
              <UButton class="social-btns"
                       icon="ri:bluesky-fill"
                       size="sm"
                       color="blue"
                       square
                       variant="solid"
                       href="https://bsky.app/"
                       aria-label="Bluesky"
              />
            </a>
            <a href="https://instagram.com/diskettekitchen">
              <UButton class="social-btns"
                       icon="mdi-instagram"
                       size="sm"
                       color="pink"
                       square
                       variant="solid"
                       aria-label="Instagram"
              />
            </a>

            <a href="https://www.printables.com/@DisketteDesi_1620830">
              <UButton class="social-btns"
                       icon="simple-icons:printables"
                       size="sm"
                       color="orange"
                       square
                       variant="solid"
                       aria-label="Printables"
              />
            </a>

            <a href="https://github.com/diskettekitchen">
              <UButton class="social-btns"
                       icon="ri:github-fill"
                       size="sm"
                       color="black"
                       square
                       variant="solid"
                       aria-label="GitHub"
              />
            </a>
            <!--            <a href="https://links.diskettekitchen.com">
                          <UButton class="social-btns"
                                   icon="heroicons:link"
                                   size="sm"
                                   color="green"
                                   square
                          />
                        </a>
            -->
          </div>
        </div>
      </template>
    </Menubar>
  </div>
</template>


<style scoped>
.p-menubar{
  float: right;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 40px;
  z-index: 5;
  position: fixed;
  width: 85%;
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