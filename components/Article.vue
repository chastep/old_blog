<template>
  <a :href="url" rel="nofollow" class="card-link">
    <article class="article-card">
      <i class="fas fa-paper-plane fa-3x card-image"></i>
      <div class="article-details">
        <h4 class="card-category">{{ category }}</h4>
        <h3 class="card-title">{{ name }}</h3>
        <p class="card-description">{{ desc }}</p>
      </div>
    </article>
  </a>
</template>

<script>
export default {
  props: ['url', 'category', 'name', 'desc']
}
</script>

<style>
.card-link {
  position: relative;
  display: block;
  color: inherit;
  text-decoration: none;
  /*&:hover .card-title {
    transition: 0.3s ease;
    color: var(--purple);
  }
  &:hover .card-image {
    transition: 0.3s ease;
    opacity: 0.9;
  }*/
}

.article-card {
  display: flex;
  flex-direction: row;
  background: #fff;
  box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  overflow: hidden;
  justify-content: center;
  margin: 0 1rem 1rem 1rem;
  align-items: center;
}

.card-image {
  /*@include transition(opacity 0.3s ease);*/
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  color: var(--purple);
}

.article-details {
  padding: 1.5rem;
  width: 75%;
}

.card-category {
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

.card-title {
  /*@include transition(color 0.3s ease);*/
  font-size: 1.125rem;
  line-height: 1.4;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.card-description {
  text-overflow: ellipsis;
}
</style>
