<template>
  <div class="results">
    <h2>Here is your shortened url!</h2>
    <a :href="shortUrl">{{ shortUrl }}</a>
    <button>Copy URL</button>
  </div>
</template>

<script>
export default {
  props: {
    shortUrl: String,
  },
};
</script>
