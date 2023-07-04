<template>
  <div class="main">
    <div>
      <h1> Main Layout</h1>
      <MenuComponent />
    <slot />
    </div>
   </div>
</template>

<script setup lang="ts">
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  scroll-behavior: smooth;
  line-height: 1.5;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: #cecece;
  height: 100vh;
}

.link {
  margin-left: 20px;
}
</style>
