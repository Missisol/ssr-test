<template>
  <div class="main">
    <h1> Widget Layout</h1>
    <slot />
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

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  line-height: 1.5;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background: #cecece;
  height: 100vh;
}

.link {
  margin-left: 20px;
}
</style>
