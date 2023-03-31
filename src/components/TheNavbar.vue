<template>
  <nav>
    <ul class="nav-links">
      <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'About' }">About</router-link></li>
    </ul>
  </nav>
</template>

<style>
nav {
  outline: 2px solid #333;
}
.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.nav-links a {
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 1rem;
  position: relative;
}

.nav-links a.current-page::before {
  content: "";
  background: rgb(39, 83, 180);

  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.125rem;
  width: 100%;
}

.nav-links a:hover {
  background: #333;
}
</style>
