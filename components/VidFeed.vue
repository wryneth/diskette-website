<template>
  <div>
    <LatestYouTubeVideos :channelId="'UCWCgjck7Tr8avF--km63lbw'" :apiKey="apiKey" />
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()
console.log('YouTube API Key:', config.public.youtubeApiKey) // Debugging log

const apiKey = config.public.youtubeApiKey
</script>