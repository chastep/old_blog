<template>
  <div class="article-container">
    <div class="article-url">
      <i class="far fa-paper-plane fa-lg"></i>
    </div>
    <div class="article-title">
      <a :href="url" rel="nofollow">{{ name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'url']
}
</script>

<style>
.article-container {
  text-align: center;
  font-size: var(--font-size-3);
  font-weight: 600;
  padding: 1.125rem;
  border: 2px solid black;
  margin-bottom: 1rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.article-container:hover {
  border-color: var(--cyan);
}

.article-url {
  width: 15%;
}

.article-title {
  width: 85%;
}
</style>
