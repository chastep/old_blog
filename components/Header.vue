<template>
  <header>
    <div class="home">
      <nuxt-link to="/">
        <div class="logo">
          <i class="fas fa-bolt fa-3x icon"></i>
        </div>
      </nuxt-link>
    </div>

    <ul class="social">
      <li v-for="soc in socials" :key="soc.url">
        <nuxt-link v-if="soc.url === '/info'" :to="soc.url"><i :class="soc.name"></i></nuxt-link>
        <nuxt-link v-else-if="soc.url === '/articles'" :to="soc.url"><i :class="soc.name"></i></nuxt-link>
        <nuxt-link v-else-if="soc.url === '/posts'" :to="soc.url"><i :class="soc.name"></i></nuxt-link>
        <a v-else :href="soc.url" rel="nofollow" target="_blank"><i :class="soc.name"></i></a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      status: undefined,
      socials: [
        {name: 'fas fa-info-circle fa-lg icon', url: '/info'},
        {name: 'far fa-newspaper fa-lg icon', url: '/articles'},
        {name: 'fas fa-rss-square fa-lg icon', url: '/posts'},
        {name: 'fas fa-code-branch fa-lg icon', url: 'https://github.com/chastep'},
        {name: 'fab fa-linkedin fa-lg icon', url: 'https://www.linkedin.com/in/chase-stephens/'},
      ]
    }
  },
}
</script>

<style>
header {
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 1.125rem;
}

.home {
  margin-right: 1.125rem;
}

.logo {
  order: 2;
  text-align: right;
}

.icon {
  color: var(--purple);
}

.icon:hover {
  color: var(--cyan);
}

.social {
  flex: 1;
  list-style: none;
  padding: 0;
  text-align: right;
  order: 3;
}

.social li {
  display: inline-block;
}

.social li:not(:last-child) {
  margin-right: 0.72rem;
}

.fa-bolt:hover {
  animation: bounce-nice 2000ms infinite;
  animation-timing-function: linear;
}

/* https://github.com/manniL/lichter.io/blob/d6abc7da7c1cbc8e2df0b7ddd22af5bcb78d400e/components/AboutMe.vue */
@keyframes bounce-nice {
  0% {
    transform: translateY(0);
  }
  25% {
      transform: translateY(-10px);
  }
  50% {
      transform: translateY(0);
  }
  75% {
      transform: translateY(10px);
  }
  100% {
      transform: translateY(0);
  }
}
</style>
