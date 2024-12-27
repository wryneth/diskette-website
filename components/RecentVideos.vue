<template>
  <UCard class="vid" id="videos">
    <template #header>
      <h1 class="title">Recent Videos</h1>
    </template>
    <div>
      <div v-if="loading" class="loading">Loading...</div>

      <div v-if="error" class="error">Error: {{ error }}</div>

      <div v-if="videos.length === 0" class="no-videos">No videos found.</div>

      <div v-if="videos.length > 0" class="video-cards">
        <div
            v-for="video in videos"
            :key="video.id"
            class="video-card"
        >
          <a :href="`https://www.youtube.com/watch?v=${video.id}`" target="_blank" class="card-link">
            <div class="card-thumbnail-container">
              <img :src="video.thumbnail" :alt="video.title" class="card-thumbnail" />
            </div>
            <h3 class="card-title">{{ video.title }}</h3>
          </a>
        </div>
      </div>
    </div>
    <template #footer>
      <Placeholder class="h-8" />
    </template>
  </UCard>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      videos: [],
      loading: false,
      error: null,
    };
  },
  props: {
    channelId: {
      type: String,
      required: true,
    },
    apiKey: {
      type: String,
      required: true,
    },
  },
  methods: {
    async fetchVideos() {
      this.loading = true;
      this.error = null;

      const apiUrl = 'https://www.googleapis.com/youtube/v3/search';
      const params = {
        part: 'snippet',
        channelId: this.channelId,
        maxResults: 10,
        order: 'date',
        type: 'video',
        key: this.apiKey,
      };

      try {
        const response = await axios.get(apiUrl, { params });
        const items = response.data.items;

        // Fetch video details (duration, etc.) for each video
        const videoDetailsPromises = items.map(item =>
            axios.get('https://www.googleapis.com/youtube/v3/videos', {
              params: {
                part: 'contentDetails',
                id: item.id.videoId,
                key: this.apiKey,
              },
            })
        );

        const videoDetailsResponses = await Promise.all(videoDetailsPromises);

        this.videos = items
            .filter((item, index) => {
              const videoDetails = videoDetailsResponses[index].data.items[0];
              const duration = videoDetails.contentDetails.duration;

              // Excluding shorts videos
              const durationInSeconds = this.convertISO8601DurationToSeconds(duration);
              return durationInSeconds >= 61; // Filter out videos under 60 seconds (Shorts)
            })
            .map(item => {
              const videoDetails = videoDetailsResponses[items.indexOf(item)].data.items[0];
              return {
                id: item.id.videoId,
                title: this.removeHashtags(item.snippet.title),
                thumbnail: item.snippet.thumbnails.high.url,
              };
            });
      } catch (error) {
        this.error = 'Failed to fetch videos. Please try again later.';
      } finally {
        this.loading = false;
      }
    },

    // Helper function to convert ISO 8601 duration (e.g., "PT1M2S") to seconds
    convertISO8601DurationToSeconds(duration) {
      const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
      const matches = regex.exec(duration);

      const hours = matches[1] ? parseInt(matches[1], 10) : 0;
      const minutes = matches[2] ? parseInt(matches[2], 10) : 0;
      const seconds = matches[3] ? parseInt(matches[3], 10) : 0;

      return hours * 3600 + minutes * 60 + seconds;
    },

    // Helper function to remove hashtags from the video title
    removeHashtags(title) {
      return title.replace(/#\S+/g, '').trim(); // Remove hashtags and any trailing whitespace
    },
  },
  mounted() {
    this.fetchVideos();
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,441&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Young+Serif&display=swap');

.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.loading, .error, .no-videos {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
}

.video-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 10px;
}

.video-card {
  background-color: #89185C;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  font-family: Ubuntu;
  transition: transform 0.3s ease-in-out;
}

.video-card:hover {
  transform: scale(1.05);
}

.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.card-thumbnail-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.card-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
  background-color: #89185C;
  border-top: 2px solid #EBA70E;
}
.title {
  text-align: center;
  font-family: 'Imbue', serif;
  font-size: 40px;
}
</style>
