<template>
  <div class="articles-container">
    <div class="articles-overview">
      These are some of my favorite articles. Enjoy!
    </div>
    <ul class="articles-list">
      <li v-for="art in articles" :key="art.url">
        <Article
          v-bind:name="art.name"
          v-bind:url="art.url"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Article from '~/components/Article.vue'
// import { Carousel, Slide } from 'vue-carousel';

export default {
  data() {
    return {
      status: undefined,
      carouselTime: 4000,
      articles: [
        {
          name: "NYT: It's Time to Break Up Facebook", 
          url: 'https://www.nytimes.com/2019/05/09/opinion/sunday/chris-hughes-facebook-zuckerberg.html'
        },
        {
          name: "Google Fights Back",
          url: 'https://stratechery.com/2019/google-fights-back/'
        },
        {
          name: '2019 Stack Overflow Developer Survey',
          url: 'https://stackoverflow.blog/2019/04/09/the-2019-stack-overflow-developer-survey-results-are-in/'
        }
      ]
    }
  },
  components: {
    Article,
    // Carousel,
    // Slide
  }
}
</script>

<style>
.articles-container {
}
.articles-overview {
  text-align: center;
  font-size: var(--font-size-4);
  font-weight: 700;
  padding: 1.125rem;
  text-transform: lowercase;
}
.articles-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0px;
}
</style>
