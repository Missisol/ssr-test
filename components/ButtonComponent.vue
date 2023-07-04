<template>
  <button @click="init()">Get data</button>
  <button @click="clear()">Clear</button>
</template>

<script setup lang="ts">
defineProps<{
  init: Function,
  clear: Function,
}>()
</script>

<style lang="scss" scoped></style>
