<template>
  <section class="container">
    <div class="bio">
      Hi there, my name is Chase. I'm a tall software engineer currently at
      <a href="https://www.govisibly.com/">Visibly</a>.
      I've worked at <a href="https://www.hatchloyalty.com/">Hatch Loyalty</a>
      and <a href="https://www.colburnhill.com/">Colburn Hill Group</a> in similar roles.
      I worked in the finance sector at
      <a href="https://www.pnc.com/en/corporate-and-institutional.html?lnksrc=topnav">PNC Bank</a> in a different life.
    </div>
  </section>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: auto;
  max-width: 40rem;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}

.bio {
  font-size: var(--font-size-6);
  font-weight: 700;
  padding: 1.125rem;
  text-transform: lowercase;
}
</style>
