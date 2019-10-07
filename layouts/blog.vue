<template>
  <div class="blog-container">
    <head>
      <script defer src="https://use.fontawesome.com/releases/v5.8.2/js/all.js" integrity="sha384-DJ25uNYET2XCl5ZF++U8eNxPWqcKohUUBUpKGlNLMchM7q4Wjg2CUpjHLaL8yYPH" crossorigin="anonymous"></script>
    </head>
    <Header />
    <main class="blog-content">
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
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.blog-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.blog-content {
  align-items: center;
  justify-content: center;
  display: flex;
  flex: auto;
  align-self: center;
  background: var(--white);
}
</style>
