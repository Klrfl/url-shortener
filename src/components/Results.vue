<template>
  <div class="error" v-if="allOk === false">
    <div class="results-content">
      <h2>SOMETHING WENT WRONG!</h2>
      <p>{{ errorMessage }}</p>
      <p>{{ dissalowedReason }}</p>
    </div>
  </div>

  <div class="results" v-if="allOk">
    <div class="results-content">
      <h2>Here is your shortened url!</h2>
      <p>The url is already copied to your clipboard.</p>
      <a class="short-url" :href="shortUrl" target="_blank">{{ shortUrl }}</a>
      <button @click="copyUrl" class="btn btn--cta">Copy URL</button>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUpdate, ref } from "vue";

const props = defineProps({
  fetchedData: Object,
});

const emit = defineEmits(["closeResult"]);

const shortUrl = ref("");
const errorMessage = ref("");
const dissalowedReason = ref("");
const allOk = ref(null);

function showResult() {
  if (props.fetchedData.ok) {
    shortUrl.value = props.fetchedData.result.full_short_link;
    copyUrl();
  } else if (props.fetchedData.ok == false) {
    errorMessage.value = props.fetchedData.error;
    dissalowedReason.value = props.fetchedData.disallowed_reason;
  }

  allOk.value = props.fetchedData.ok;
}

function copyUrl() {
  navigator.clipboard.writeText(shortUrl.value);
}

onBeforeUpdate(() => {
  showResult();
});
</script>

<style>
.results {
  padding: 2rem;
  text-align: center;
}

.short-url {
  background: #2f2f2a;
  padding: 0.5rem;
}

@media screen and (prefers-color-scheme: light) {
  .short-url {
    background: #ecececec;
  }
}
</style>
