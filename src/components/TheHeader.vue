<template>
  <header class="info">
    <h1>URL Shortener</h1>
    <p>
      insert the url you want to shorten and click shorten to get the shortened
      url.
    </p>
  </header>
  <form @submit.prevent="getShortUrl">
    <input type="text" placeholder="put your URL here" v-model="url" />
    <input type="submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      shortUrl: "",
    };
  },
  methods: {
    getShortUrl() {
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer b8c5695e01c439ba5398e77a38793cdcbfc13627`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          group_guid: "",
          domain: "bit.ly",
          long_url: this.url,
        }),
      };

      const response = fetch("https://api-ssl.bitly.com/v4/shorten", options)
        .then((response) => response.json())
        // .then((data) => (this.shortUrl = data.link));
        .then((data) => (this.shortUrl = data.link));
      this.$emit("gotShortUrl", this.shortUrl);
    },
  },
};
</script>
