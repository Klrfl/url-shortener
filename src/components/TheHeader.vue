<template>
  <header>
    <div class="info">
      <h1>URL Shortener</h1>
      <p>
        insert the url you want to shorten and click shorten to get the
        shortened url.
      </p>
    </div>

    <div class="input-form">
      <div class="input-container">
        <input
          type="text"
          placeholder="put your URL here"
          v-model="url"
          ref="UrlInput"
        />
      </div>
      <div class="button-container">
        <button class="btn btn--cta" @click="getShortUrl">Get Short URL</button>
        <button class="btn btn--clear" @click="clearUrl">
          Clear URL Field
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  emits: ["gotShortUrl"],
  data() {
    return {
      url: "",
      shortUrl: "",
    };
  },
  methods: {
    checkValidUrl(url) {
      try {
        new URL(url);
      } catch (error) {
        console.log(error);
        return false;
      }
      return true;
    },

    async getShortUrl() {
      const isValidUrl = this.checkValidUrl(this.url);
      if (!isValidUrl) {
        alert("not a valid url.");
      }

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

      const response = await fetch(
        "https://api-ssl.bitly.com/v4/shorten",
        options
      )
        .then((response) => response.json())
        .then((data) => (this.shortUrl = data.link))
        .catch((err) => console.log(err));

      // copy URL to clipboard
      navigator.clipboard.writeText(this.shortUrl);
      this.$emit("gotShortUrl", this.shortUrl);
    },

    clearUrl() {
      this.url = "";
    },
  },
};
</script>

<style>
header {
  background: #22242d;
  padding: 1rem;
  margin: auto;
  text-align: center;
}

.input-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: inherit;
}

.btn {
  margin-inline: 0.5rem;
}

.btn--cta {
  padding: 0.5rem;
  background-color: var(--accent);
  cursor: pointer;
}

.btn--clear {
  outline: 2px solid var(--accent);
}

@media screen and (prefers-color-scheme: light) {
  header {
    background: #ececec;
  }
}
</style>
