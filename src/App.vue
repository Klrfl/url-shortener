<script setup>
import { onMounted, inject } from "vue";
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
import "./assets/globals.css";

const theme = inject("theme");

onMounted(() => {
  localStorage.setItem("theme-preference", theme.value);
  document.body.setAttribute("data-theme", theme.value);
});
</script>

<template>
  <TheNavbar />
  <RouterView />
  <TheFooter />
</template>

<style>
main {
  padding: 2rem;
  margin: auto;
  max-width: 70ch;
}
</style>
