<script setup lang="ts">
import {Card} from '@/components/ui/card'

const config = useRuntimeConfig();

const channelId = 'UCWCgjck7Tr8avF--km63lbw'

const videos = ref([]);
const loading = ref(true);
const error = ref(null);


onMounted(() => {
  // Fetch videos
  fetchVideos();
});

const fetchVideos = async () => {
  try {
    const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${config.public.apiKey}`
    );

    const channelData = await channelResponse.json();

    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

    const videosResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=${uploadsPlaylistId}&key=${config.public.apiKey}`
    );

    const videosData = await videosResponse.json();

    const videoIds = videosData.items.map(item => item.snippet.resourceId.videoId).join(',');

    const videoDetailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${config.public.apiKey}`
    );

    const videoDetailsData = await videoDetailsResponse.json();

    const channelDetailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${config.public.apiKey}`
    );

    const channelDetailsData = await channelDetailsResponse.json();
    const channelThumbnail = channelDetailsData.items[0].snippet.thumbnails.default.url;

    videos.value = videosData.items.map(item => {
      const videoId = item.snippet.resourceId.videoId;
      const videoDetails = videoDetailsData.items.find(detail => detail.id === videoId);

      return {
        id: videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        publishedAt: item.snippet.publishedAt,
        channelTitle: item.snippet.channelTitle,
        channelThumbnail: channelThumbnail,
        duration: videoDetails ? videoDetails.contentDetails.duration : 'PT0S',
        viewCount: videoDetails ? videoDetails.statistics.viewCount : 0
      };
    });
  } catch (err) {
    error.value = 'Failed to load videos. Please check your network connection.';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const formatDuration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = (match[1] ? match[1].replace('H', '') : 0);
  const minutes = (match[2] ? match[2].replace('M', '') : 0);
  const seconds = (match[3] ? match[3].replace('S', '') : 0);

  if (hours > 0) {
    return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  } else {
    return `${minutes}:${seconds.padStart(2, '0')}`;
  }
};

const formatViews = (views) => {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  } else {
    return views;
  }
};

const formatDate = (date) => {
  const now = new Date();
  const videoDate = new Date(date);
  const diffTime = Math.abs(now - videoDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    return '1 day ago';
  } else if (diffDays < 30) {
    return `${diffDays} days ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
};
</script>

<template>
    <Card class="m-5" id="vidfeed">
      <Card class="ms-5 me-5">
        <h1 class="text-center text-4xl font-bold font-calistoga">Recent Uploads</h1>
      </Card>

      <div v-if="loading" class="flex justify-center items-center py-10">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary dark:border-primary"></div>
      </div>

      <Card v-else-if="error" class="dark:bg-red-900 border-red-400  text-red-700 dark:text-red-200 p-5 me-5 ms-5 text-center">
        <p>{{ error }}</p>
      </Card>

      <div v-else class=" ms-5 me-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
            v-for="video in videos"
            :key="video.id"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-102 transition-shadow duration-300">

          <a :href="`https://www.youtube.com/watch?v=${video.id}`" target="_blank" class="block">
            <div class="relative">
              <img :src="video.thumbnail" :alt="video.title" class="w-full aspect-video object-cover">
              <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                {{ formatDuration(video.duration) }}
              </div>
            </div>

            <div class="p-4">
              <h3 class="font-ubuntu font-semibold text-lg mb-2 line-clamp-2 dark:text-white">{{ video.title }}</h3>

              <div class="flex font-ubuntu justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{{ formatViews(video.viewCount) }} views</span>
                <span>{{ formatDate(video.publishedAt) }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Card>
</template>