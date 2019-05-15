<template>
  <footer class="sans">
    <div class="copy">
      <p>CAS &copy; {{year}}</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return{
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style>
footer {
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  font-size: var(--font-size-1);
  padding: 1.125rem;
  width: 100%;
  text-align: center;
}
.copy {
  flex: 1;
  order: 1;
}
</style>
