<template>
  <div>
    <LatestYouTubeVideos :channelId="'UCWCgjck7Tr8avF--km63lbw'" :apiKey="'AIzaSyCKFe2JIrHVBKLpUV98wsD1F9LRYsEIez8'" />
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
