<template>
  <div>
    <div class="post-title">
      <h1>{{post.attributes.title}}</h1>
    </div>
    <div class="content" v-html="post.html"></div>
  </div>
</template>

<script>
export default {
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
