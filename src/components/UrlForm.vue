<template>
  <header>
    <div class="info">
      <h1>URL Shortener</h1>
      <p>
        insert the URL you want to shorten and click the blue button to get a
        new shortened URL.
      </p>
    </div>

    <div class="input-form">
      <form class="input-container" @submit.prevent="getShortUrl">
        <input
          autofocus
          type="url"
          placeholder="put your URL here"
          v-model="url" />
      </form>

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

function checkValidUrl(inputURL) {
  try {
    new URL(inputURL);
  } catch (error) {
    console.error(error);
    return false;
  }

  return true;
}

async function getShortUrl() {
  const isValidUrl = checkValidUrl(url.value);

  if (isValidUrl === false) {
    alert("not a valid url.");
    return;
  }

  // fetch short api
  const response = await fetch(
    `https://api.shrtco.de/v2/shorten?url=${url.value}`
  );

  const data = ref(await response.json());
  emit("gotShortUrl", data.value);
}

function clearUrl() {
  url.value = "";
}
</script>

<style scoped>
header {
  background: var(--form-bg);
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
  background: var(--form-bg);
  filter: brightness(0.9);
  color: inherit;
  border: none;
  border-bottom: 2px solid var(--accent);
  width: 100%;
  padding: 0.5rem;
  font-size: inherit;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  flex-basis: fit-content;
}

.btn--cta {
  background-color: var(--accent);
  color: var(--darker-white);
}

.btn--clear {
  outline: 2px solid var(--accent);
  color: inherit;
}
</style>
