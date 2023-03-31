<template>
  <TheNavbar />
  <main>
    <h1>About this project</h1>
    <p>
      This project was made by me, Klrfl, with the
      <a href="https://vuejs.org" target="_blank">Vue</a> framework. Code,
      design, and API key, I worked on them all by myself (with the help of
      Google and Stack OVerflow).
    </p>
    <h2>How did you access the API?</h2>
    <p>
      I made a POST request to Bitly's official API. using <code>fetch</code>.
      You can read more about the API on the
      <a href="https://dev.bitly.com/" target="_blank"
        >official documentation page</a
      >. Fun fact, my <code>fetch</code> request wasn't working, and I was stuck
      on it for a while, but then I realized I made a typo on the API endpoint
      URL.
    </p>
  </main>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style>
main {
  padding: 2rem;
}
</style>
