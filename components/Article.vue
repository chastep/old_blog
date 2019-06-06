<template>
  <div class="article-container">
    article
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: undefined,
      socials: [
        {name: 'fas fa-info-circle fa-lg', url: '/info' },
        {name: 'far fa-newspaper fa-lg', url: '/articles' },
        {name: 'fas fa-code-branch fa-lg', url: 'https://github.com/chastep'},
        {name: 'fab fa-linkedin fa-lg', url: 'https://www.linkedin.com/in/chase-stephens/'},
      ]
    }
  },
}
</script>

<style>
.article-container {
  text-align: center;
  font-size: var(--font-size-4);
  font-weight: 700;
  padding: 1.125rem;
  text-transform: lowercase;
}
</style>
