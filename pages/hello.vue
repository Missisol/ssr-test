<template>
  <!-- <ClientOnly> -->
    <div class="child">
      <h2>Blog Page</h2>
      <ButtonComponent
        :init="init"
        :clear="clear"
      />
      <pre>{{ info }}</pre>
    </div>
  <!-- </ClientOnly> -->
</template>

<script setup>
definePageMeta({
  layout: 'main',
  middleware: 'test'
})

const info = ref(null)

const init = async() => {
  console.log('Hello init request')
  const { data, pending, status } = await useFetch('/api/hello', {
        server: false,
        default: () => 'Default hello data',
  })
  console.log('Hello page received inner api data')
  console.log('status', status.value)
  console.log('data', data.value)

  return info.value = data
}

const clear = () => {
  info.value = null
}

init()
</script>

<style scoped>
.child {
  width: 500px;
  overflow: hidden;
}
</style>