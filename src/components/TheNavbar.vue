<template>
  <nav>
    <ul class="nav-links">
      <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'About' }">About</router-link></li>
    </ul>
  </nav>
</template>

<style>
:root {
  --nav-color-dark: #eee;
  --nav-color-light: #222;
  --nav-outline-dark: #333;
  --nav-outline-light: #cecece;
}

nav {
  outline: 2px solid var(--nav-outline-dark);
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.nav-links a {
  color: var(--nav-color-dark);
  text-decoration: none;
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 1rem;
  position: relative;
}

.nav-links a:visited {
  color: var(--nav-color-dark);
}

.nav-links a.current-page::before {
  content: "";
  background: var(--accent);

  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.125rem;
  width: 100%;
}

.nav-links a:hover {
  background: #333;
  text-decoration: none;
}
@media screen and (prefers-color-scheme: light) {
  nav {
    outline: 2px solid var(--nav-outline-light);
  }

  .nav-links a:is(:link, :visited) {
    color: var(--nav-color-light);
  }

  .nav-links a:hover {
    background: #d2d2dd;
  }
}
</style>
