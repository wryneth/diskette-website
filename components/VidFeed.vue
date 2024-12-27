<template>
  <div>
    <LatestYouTubeVideos :channelId="'UCWCgjck7Tr8avF--km63lbw'" :apiKey="apiKey" />
  </div>
</template>

<script>
import LatestYouTubeVideos from './components/RecentVideos.vue';

export default {
  components: {
    LatestYouTubeVideos
  },
  data() {
    return {
      apiKey: process.env.YOUTUBE_API // Access API key from environment variable
    };
  }
};
</script>