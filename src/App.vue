<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
import "./assets/globals.css";
</script>

<template>
  <TheNavbar />
  <RouterView />
  <TheFooter />
</template>

<style>
.btn {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

main {
  padding: 2rem;
  margin: auto;
  max-width: 70ch;
}
</style>
