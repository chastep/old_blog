<template>
  <div class="article-container">
    <a :href="url" rel="nofollow" class="article-url"><i class="far fa-paper-plane fa-lg"></i></a>
    <div class="article-title">
      {{ name }}
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
  border: 2px solid white;
  border-radius: 1rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.article-container:hover {
  border-color: var(--cyan);
}

.article-url {
  float: left;
  width: 15%;
  height: 100%;
}

.article-title {
  float: right;
  width: 85%;
}
</style>
