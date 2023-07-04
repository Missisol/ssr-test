<template>
  <ClientOnly>
  <div class="child">
    <h2>Home Page</h2>
    <ButtonComponent
      :init="init"
      :clear="clear"
    />
    <ul>
      <li v-for="user in data">{{ user.firstName }}</li>
    </ul>
  </div>
  </ClientOnly>
</template>

<script setup>
definePageMeta({
  layout: 'main',
  middleware: 'test'
})

const data = ref(null)

const init = async() => {
  console.log('users init request')
  const { data: users, pending, status } = await useFetch('https://dummyjson.com/users', {
      // server: false,
      default: () => [{firstName: 'Default users data'}],
  })
  console.log('Users received data')
  console.log('status', status.value)
  console.log('users', users.value)
  return data.value = users?.value?.users ? users?.value?.users : users.value
}

const clear = () => {
  data.value = null
}

init()
</script>

<style scoped>
.child {
  width: 500px;
  overflow: hidden;
}
</style>
