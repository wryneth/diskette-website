<template>
  <div>
    <LatestYouTubeVideos :channelId="'UCWCgjck7Tr8avF--km63lbw'" :apiKey="'AIzaSyAZlFN86GV9UNJk3oIfOcICVt-t7ANGC8E'" />
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
