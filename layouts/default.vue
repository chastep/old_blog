<template>
  <div class="page-container">
    <head>
      <script defer src="https://use.fontawesome.com/releases/v5.8.2/js/all.js" integrity="sha384-DJ25uNYET2XCl5ZF++U8eNxPWqcKohUUBUpKGlNLMchM7q4Wjg2CUpjHLaL8yYPH" crossorigin="anonymous"></script>
    </head>
    <Header />
    <main class="page-content">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
:root {
  /* colors */
  --pink: hsl(6,71%,77%);
  --blue: hsl(185,52%,65%);
  --cyan: hsl(180,100%,50%);
  --purple: hsl(270,55%,36%);
  --white: hsl(0,0,100);
  /* type */
  --font-size-11: 6.706rem;
  --font-size-10: 5.364rem;
  --font-size-9: 4.292rem;
  --font-size-8: 3.433rem;
  --font-size-7: 2.747rem;
  --font-size-6: 2.197rem;
  --font-size-5: 1.758rem;
  --font-size-4: 1.406rem;
  --font-size-3: 1.125rem;
  --font-size-2: 0.9rem;
  --font-size-1: 0.72rem;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: linear-gradient(var(--pink), var(--blue));
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.text-link {
  color: var(--purple);
  text-decoration: none;
}

.text-link:hover {
  background-color: var(--cyan);
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-content {
  align-items: center;
  justify-content: center;
  display: flex;
  flex: auto;
  max-width: 40rem;
  align-self: center;
}

.page-content a {
  text-decoration: underline;
  text-decoration-color: var(--cyan);
}
</style>
