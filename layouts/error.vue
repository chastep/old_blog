<template>
  <div class="container">
    <!-- https://emojipedia.org -->
    <h1 v-if="error.statusCode === 404">⛔ page not found ⛔</h1>
    <h1 v-else>An error occurred</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
