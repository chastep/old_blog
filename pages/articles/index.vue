<template>
  <div class="articles-container">
    <div class="articles-overview">
      These are some of my favorite articles. Enjoy!
    </div>
    <ul class="articles-list">
      <li v-for="art in articles" :key="art.url">
        <Article
          v-bind:url="art.url"
          v-bind:category="art.category"
          v-bind:name="art.name"
          v-bind:desc="art.desc"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Article from '~/components/Article.vue'

export default {
  data() {
    return {
      articles: [
        {
          url: 'https://www.nytimes.com/2019/05/09/opinion/sunday/chris-hughes-facebook-zuckerberg.html',
          category: 'News',
          name: "NYT: It's Time to Break Up Facebook",
          desc: 'NYT article on why FB should be split up',
        },
        {
          url: 'https://stratechery.com/2019/google-fights-back/',
          category: 'News',
          name: "Google Fights Back",
          desc: 'Ben Thompson article on recent google initatives',
        },
        {
          url: 'https://stackoverflow.blog/2019/04/09/the-2019-stack-overflow-developer-survey-results-are-in/',
          category: 'News',
          name: '2019 Stack Overflow Developer Survey',
          desc: 'Annual Stack Overflow dev survey results',
        }
      ]
    }
  },
  components: {
    Article,
  }
}
</script>

<style>
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
