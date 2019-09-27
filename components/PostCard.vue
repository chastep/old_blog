<template>
  <nuxt-link :to="'/posts/' + post.attributes.name">
    <article class="postcard">
      <i class="fas fa-paper-plane fa-3x postcard-image"></i>
      <div class="postcard-details">
        <h4 class="postcard-tags">{{ post.attributes.tags }}</h4>
        <h3 class="postcard-title">
          {{post.attributes.title}}
        </h3>
        <p class="postcard-description">
          {{ post.attributes.description }}
        </p>
      </div>
    </article>
  </nuxt-link>
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

<style>
/* https://vuejsexamples.com/a-simple-and-responsive-card-ui-component-made-with-vue-js/ */
.postcard {
  display: flex;
  flex-direction: row;
  background: #fff;
  box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  overflow: hidden;
  justify-content: center;
  margin: 0 1rem 1rem 1rem;
  align-items: center;
  opacity: 0.75;
}

.postcard:hover {
  opacity: 1;
}

.postcard:hover > .postcard-image {
  color: var(--cyan);
}

.postcard-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  color: var(--purple);
}

.postcard-details {
  padding: 1.5rem;
  width: 75%;
}

.postcard-category {
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
  border-bottom: 0.125rem solid #ebebeb;
}

.postcard-title {
  font-size: 1.125rem;
  line-height: 1.4;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.postcard-description {
  text-overflow: ellipsis;
}
</style>
