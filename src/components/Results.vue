<template>
  <div class="results">
    <h2>Here is your shortened url!</h2>
    <p>The url is already copied to your clipboard.</p>
    <a class="short-url" :href="shortUrl" target="_blank">{{ shortUrl }}</a>
    <button @click="copyUrl" class="btn btn--cta">Copy URL</button>
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
