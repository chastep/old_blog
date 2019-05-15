<template>
  <header>
    <div class="home">
      <nuxt-link to="/">
        <div class="logo">
          <i class="fas fa-bolt fa-3x"></i>
        </div>
      </nuxt-link>
    </div>

    <ul class="social">
      <li v-for="soc in socials" :key="soc.url">
        <a :href="soc.url" rel="nofollow"><i :class="soc.name"></i></a>
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
        {name: 'fas fa-code-branch fa-lg', url: 'https://github.com/chastep'},
        {name: 'fab fa-linkedin fa-lg', url: 'https://www.linkedin.com/in/chase-stephens/'},
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

.logo > svg {
  display: inline-block;
  transition: .33s ease-out;
}

.logo > svg:hover {
  opacity: 1;
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
</style>
