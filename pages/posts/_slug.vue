<template>
  <div class="post-container">
    <div class="post-title">
      <h1>{{ post.attributes.title }}</h1>
    </div>
    <div class="post-date-tags">
      <span>{{ post.attributes.date }} /// {{ post.attributes.tags.join(', ') }}</span>
    </div>
    <div class="post-content" v-html="post.html"></div>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({ params }) {
    try {
      let post = await import(`~/content/posts/${params.slug}.md`);
      // console.debug(post)
      return {
        post
      }
    } catch(err) {
      // console.debug(err)
      return false
    }
  }
}
</script>

<style>
.post-container {
  margin: 1rem 3rem 1rem 3rem;
  font-size: var(--font-size-4);
}

.post-title {
  margin: inherit;
}

.post-date-tags {
  margin: inherit;
  font-size: var(--font-size-3);
  border-bottom: solid var(--cyan) 2px;
}

.post-content {
  margin: inherit;
}

.post-content > p {
  margin-bottom: 2rem;
}

.post-content > ul {
  margin-bottom: 2rem;
}

.post-content img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

@media screen and (max-width: 601px) {
  .post-container {
    font-size: var(--font-size-2);
  }
  .post-date-tags {
    font-size: var(--font-size-1); 
  }
}
</style>
