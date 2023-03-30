<template>
  <div class="results">
    <h2>Here is your shortened url!</h2>
    <a class="short-url" :href="shortUrl" target="_blank">{{ shortUrl }}</a>
    <button @click="copyUrl">Copy URL</button>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: {
    shortUrl: String,
  },

  methods: {
    copyUrl() {
      navigator.clipboard.writeText(this.shortUrl);
    },
  },
};
</script>
