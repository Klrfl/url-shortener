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
          autofocus
          type="url"
          placeholder="put your URL here"
          v-model="url"
          ref="UrlInput" />
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

<script setup>
import { ref } from "vue";

const emit = defineEmits(["gotShortUrl"]);

const url = ref("");
const shortUrl = ref("");

function checkValidUrl(url) {
  try {
    new URL(url);
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
}

async function getShortUrl() {
  const isValidUrl = checkValidUrl(url.value);
  console.log(isValidUrl);

  if (!isValidUrl) {
    alert("not a valid url.");
  }

  // fetch short api
  const response = await fetch(
    `https://api.shrtco.de/v2/shorten?url=${url.value}`
  );
  const data = await response.json();
  shortUrl.value = await data.result.full_short_link;

  // copy URL to clipboard
  navigator.clipboard.writeText(shortUrl.value);
  emit("gotShortUrl", shortUrl.value);
}

function clearUrl() {
  url.value = "";
}
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
  border: none;
  border-bottom: 2px solid var(--accent);
  width: 100%;
  padding: 0.5rem;
  font-size: inherit;
}

.btn--cta {
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

  .btn--cta {
    color: #eee;
  }
}
</style>
