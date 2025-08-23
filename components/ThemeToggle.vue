<script setup lang="ts">
import {Select, SelectContent, SelectItem, SelectTrigger} from '@/components/ui/select'
import {Icon} from "@iconify/vue";

const colorMode = useColorMode()

</script>

<template>
  <Select v-model="$colorMode.preference">
    <SelectTrigger class="rounded-full">
      <Icon icon="ri:palette-fill"/>
    </SelectTrigger>
    <SelectContent class="rounded-4xl p-2">
      <SelectItem value="system" class="rounded-4xl">
        <Icon icon="icon-park-outline:new-computer"/>
        System
      </SelectItem>
      <SelectItem value="light" class="rounded-4xl">
        <Icon icon="humbleicons:sun"/>
        Light
      </SelectItem>
      <SelectItem value="dark" class="rounded-4xl">
        <Icon icon="si:moon-fill"/>
        Dark
      </SelectItem>
      <SelectItem value="sepia" class="rounded-4xl">
        <Icon icon="mingcute:fish-fill"/>
        Sepia
      </SelectItem>
    </SelectContent>
  </Select>
</template>
