<template>
  <div>
    <h1>my blog posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link :to="'/posts/' + post.attributes.name">{{post.attributes.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
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
}
</script>
