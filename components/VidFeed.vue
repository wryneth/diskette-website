<template>
  <div>
    <h1>Latest YouTube Videos</h1>
    <LatestYouTubeVideos :channelId="'UCWCgjck7Tr8avF--km63lbw'" :apiKey="apiKey" />
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#app'
import LatestYouTubeVideos from './components/RecentVideos.vue';

// Access the YouTube API key from runtime config
const config = useRuntimeConfig()
const apiKey = config.public.youtubeApiKey
</script>
