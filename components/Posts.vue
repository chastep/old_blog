<template>
  <section>
    <div class="posts__top">
      <div>
        <h2>Posts Here</h2>
      </div>
    </div>
    <ul class="posts">
      <post v-for="post in posts" :key="post.name" :post="post"/>
    </ul>
  </section>
</template>

<script>
import Post from "~/components/Post.vue";

export default {
  components: { Post },
  props: {
    posts: {
      type: Array
    }
  }
}
</script>
