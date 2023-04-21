<template>
  <main>
    <TheHeader @gotShortUrl="handleUrl" />
    <Results :shortUrl="shortUrl" v-if="shortUrl.length !== 0" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import TheHeader from "../components/TheHeader.vue";
import Results from "../components/Results.vue";

const shortUrl = ref("");

function handleUrl(url) {
  shortUrl.value = url;
}
</script>
