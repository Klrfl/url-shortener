<template>
  <main>
    <h1>About this project</h1>
    <p>
      This project was made by me, Klrfl, with the
      <a href="https://vuejs.org" target="_blank">Vue</a> framework. Code,
      design, and API key, I worked on them all by myself (with the help of
      Google and Stack Overflow).
    </p>
    <h2>How did you access the API?</h2>
    <p>
      I made a fetch request to shrtcode's URL shortener API. You can read about
      it in the
      <a href="https://shrtco.de/docs" target="_blank"
        >official documentation page</a
      >. Before this, I used Bitly's official API, where I had to make a POST
      request. It was more complicated because it required authentication with a
      bearer token. You can read more about the API on the
      <a href="https://dev.bitly.com/" target="_blank"
        >official documentation page</a
      >. Fun fact, my <code>fetch</code> request wasn't working, and I was stuck
      on it for a while, but then I realized I made a typo on the API endpoint
      URL.
    </p>
  </main>
</template>

<style scoped>
a:link {
  color: dodgerblue;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:visited {
  color: dodgerblue;
}
</style>
