<template>
  <div class="posts-container">
    <div class="posts-overview">
      my blog posts
    </div>
    <ul class="posts-list">
      <li v-for="post in posts" :key="post.attributes.title">
        <PostCard
          v-bind:post="post"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  async asyncData() {
    const resolve = require.context("~/content/posts/", true, /\.md$/)
    const imports = resolve.keys().map((key) => {
      const [, name] = key.match(/\/(.+)\.md$/);
      return resolve(key);
    });
    return {
      posts: imports
    }
  },
  components: {
    PostCard,
  }
}
</script>

<style>
.posts-container {}

.posts-overview {
  text-align: center;
  font-size: var(--font-size-4);
  font-weight: 700;
  padding: 1.125rem;
  text-transform: lowercase;
}

.posts-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0px;
}
</style>
