<template>
  <li class="post">
    <nuxt-link :to="localePath({ name: 'post-slug', params: { slug: post.name }})">
      <h3 class="post__title">
        {{ post.title }}
      </h3>
      <p class="post__description">
        {{ post.description }}
      </p>
    </nuxt-link>
  </li>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object
      }
    }
  }
</script>
