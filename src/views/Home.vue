<template>
  <main>
    <UrlForm @gotShortUrl="handleUrl" />
    <Results :shortUrl="shortUrl" v-if="shortUrl.length !== 0" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import UrlForm from "../components/UrlForm.vue";
import Results from "../components/Results.vue";

const shortUrl = ref("");

function handleUrl(url) {
  shortUrl.value = url;
}
</script>
