<template>
  <div>
    <LatestYouTubeVideos :channelId="'UCWCgjck7Tr8avF--km63lbw'" :apiKey="" />
  </div>
</template>

<script>
import LatestYouTubeVideos from './components/RecentVideos.vue';

export default {
  components: {
    LatestYouTubeVideos
  }
};
</script>
