<template>
  <TheNavbar />
  <main>
    <TheHeader @gotShortUrl="handleUrl" />
    <Results :shortUrl="shortUrl" v-if="shortUrl.length !== 0" />
  </main>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import Results from "../components/Results.vue";
import TheNavbar from "../components/TheNavbar.vue";

export default {
  components: {
    TheHeader,
    Results,
    TheNavbar,
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
