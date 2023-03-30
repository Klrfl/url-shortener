<template>
  <TheHeader @gotShortUrl="handleUrl" />
  <Results :shortUrl="shortUrl" v-if="shortUrl.length !== 0" />
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import Results from "../components/Results.vue";

export default {
  components: {
    TheHeader,
    Results,
  },

  data() {
    return {
      shortUrl: "",
    };
  },

  methods: {
    handleUrl(url) {
      this.shortUrl = url;
    },
  },
};
</script>
