<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
import "./assets/globals.css";
</script>

<template>
  <TheNavbar />
  <RouterView />
</template>

<style>
.btn {
  padding: 0.5rem;
  cursor: pointer;
}

main {
  padding: 2rem;
  margin: 0 auto;
  max-width: 70ch;
}
</style>
