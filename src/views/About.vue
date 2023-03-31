<template>
  <TheNavbar />
  <main>
    <h1>About this project</h1>
    <p>This project</p>
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
