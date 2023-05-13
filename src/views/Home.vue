<template>
  <main>
    <UrlForm @got-short-url="handleUrl" @close-result="closeResult" />
    <Results
      :fetchedData="fetchedData"
      v-if="showResults"
      @close-result="closeResult" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import UrlForm from "../components/UrlForm.vue";
import Results from "../components/Results.vue";

const fetchedData = ref("");
const showResults = ref(false);

function handleUrl(data) {
  fetchedData.value = data;
  if (data.length !== 0) {
    showResults.value = true;
  }
}

function closeResult() {
  showResults.value = false;
}
</script>
