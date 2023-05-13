<template>
  <nav>
    <ul class="nav-links">
      <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'About' }">About</router-link></li>
    </ul>

    <button class="btn theme-toggle" @click="setTheme">{{ themeText }}</button>
  </nav>
</template>

<script setup>
import { onMounted, inject, ref } from "vue";
let theme = inject("theme");

const themeText = ref("");

function setTheme() {
  if (theme === "dark") {
    theme = "light";
    localStorage.setItem("theme-preference", "light");
    themeText.value = theme;
  } else {
    theme = "dark";
    themeText.value = theme;
    localStorage.setItem("theme-preference", "dark");
  }

  document.body.setAttribute("data-theme", theme);
}

onMounted(() => {
  themeText.value = theme.value;
});
</script>

<style>
nav {
  outline: 2px solid var(--nav-outline);
  display: flex;
  justify-content: space-between;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.nav-links a {
  color: var(--nav-color);
  text-decoration: none;
  display: block;
  padding: 1rem;
  position: relative;
}

.nav-links a.current-page::before {
  content: "";
  background: var(--accent);

  position: absolute;
  inset: auto 0 0 0;
  height: 0.125rem;
  width: 100%;
}

.nav-links a:hover {
  background: var(--nav-hover);
  text-decoration: none;
}
</style>
