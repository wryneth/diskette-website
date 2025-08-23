<script setup>
const draggedItem = ref(null)
const draggedFromTier = ref(null)
const dragOverTier = ref(null)

const tiers = reactive([
  {
    id: 'smart',
    name: 'Genuinely Smart',
    color: '#ff4444',
    items: []
  },
  {
    id: 'possible',
    name: "I'll Allow It",
    color: '#ff8800',
    items: []
  },
  {
    id: 'wtf',
    name: 'WTF',
    color: '#ffdd00',
    items: []
  },
  {
    id: 'lazy',
    name: 'Just Lazy',
    color: '#88dd00',
    items: []
  },
  {
    id: 'bitch',
    name: 'Straight to Bitch Prison',
    color: '#0088dd',
    items: []
  }
])

const unrankedItems = reactive([
  {
    id: 1,
    name: 'Item 1',
    src: '/tier-list/1.png'
  },
  {
    id: 2,
    name: 'Item 2',
    src: '/tier-list/2.png'
  },
  {
    id: 3,
    name: 'Item 3',
    src: '/tier-list/3.png'
  },
  {
    id: 4,
    name: 'Item 4',
    src: '/tier-list/4.png'
  },
  {
    id: 5,
    name: 'Item 5',
    src: '/tier-list/5.png'
  }
])

const handleDragStart = (item, fromTier) => {
  draggedItem.value = item
  draggedFromTier.value = fromTier
}

const handleDragOver = (tierId) => {
  dragOverTier.value = tierId
}

const handleDrop = (toTier) => {
  const item = draggedItem.value
  const fromTier = draggedFromTier.value

  if (fromTier === 'unranked') {
    const index = unrankedItems.findIndex(i => i.id === item.id)
    if (index > -1) {
      unrankedItems.splice(index, 1)
    }
  } else {
    const sourceTier = tiers.find(t => t.id === fromTier)
    if (sourceTier) {
      const index = sourceTier.items.findIndex(i => i.id === item.id)
      if (index > -1) {
        sourceTier.items.splice(index, 1)
      }
    }
  }

  const targetTier = tiers.find(t => t.id === toTier)
  if (targetTier) {
    targetTier.items.push(item)
  }

  dragOverTier.value = null
}

const resetTierList = () => {
  tiers.forEach(tier => {
    unrankedItems.push(...tier.items)
    tier.items.length = 0
  })
}
</script>

<template>
  <div class="min-h-screen p-10">
    <div class="max-w-7xl mx-auto">
      <div
          class="rounded-t-4xl bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-800 mb-5 p-5 outline-1 inline-flex w-full gap-3">
        <h1 class="text-4xl w-full font-calistoga">Audio Sins Tier List</h1>
        <Button @click="resetTierList" class="bg-red-500 hover:bg-red-700 rounded-full">Reset Rankings</Button>
        <a href="/">
          <Button class="rounded-full">Back Home</Button>
        </a>
        <ThemeToggle/>
      </div>

      <div class="bg-white dark:bg-gray-800  shadow-lg dark:shadow-gray-800 overflow-hidden outline-1">

        <div v-for="tier in tiers" :key="tier.id" class="flex border-gray-200 last:border-b-0">
          <div
              class="lg:w-65 lg:h-40 object-cover md:w-50 md:h-30 sm:w-40 sm:h-25 flex items-center text-center p-5 justify-center font-bold"
              :style="{ backgroundColor: tier.color }">
            <h1 class="lg:text-4xl md:text-2xl sm:text-xl font-bold text-center text-gray-700 font-ubuntu">{{ tier.name }}</h1>
          </div>

          <div
              class="flex-1 flex flex-wrap items-start content-start"
              :class="{'bg-fuchsia-100 border-fuchsia-300 dark:bg-gray-600 dark:border-gray-700 border-2 border-dashed': dragOverTier === tier.id }"
              @dragover.prevent="handleDragOver(tier.id)"
              @drop="handleDrop(tier.id)">
            <div v-for="item in tier.items" :key="item.id"
                 class="relative group cursor-move bg-white rounded-lg shadow-sm select-none"
                 draggable="true"
                 @dragstart="handleDragStart(item, tier.id)">
              <img :src="item.src" :alt="item.name"
                   class="lg:w-40 lg:h-40 md:w-30 md:h-30 sm:w-25 sm:h-25 object-cover pointer-events-none"/>

              <div
                  class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-xs text-center p-2 opacity-0 group-hover:opacity-100">
                {{ item.name }}
              </div>
            </div>

            <div v-if="tier.items.length === 0"
                 class="border-b-1 w-full h-full flex items-center justify-center text-gray-400 text-lg">
              Drop items here
            </div>
          </div>
        </div>
      </div>

      <div
          class="bg-white dark:bg-gray-800 rounded-b-3xl shadow-lg dark:shadow-gray-800 mt-5 outline-1 inline-flex w-full">
        <div
            v-for="item in unrankedItems"
            :key="item.id"
            class="relative group cursor-move rounded-lg shadow-sm select-none mt-3 mb-3 ms-3"
            draggable="true"
            @dragstart="handleDragStart(item, 'unranked')">
          <img :src="item.src" :alt="item.name" class="lg:w-40 lg:h-40 object-cover md:w-30 md:h-30 sm:h-20 sm:w-20 rounded-xl pointer-events-none "/>
          <div
              class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-xs text-center rounded-b-xl p-2  opacity-0 group-hover:opacity-100">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>