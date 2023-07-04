<template>
  <ClientOnly>
    <div class="child">
      <h2>Home Page</h2>
      <ButtonComponent
        :init="init"
        :clear="clear"
      />
      <ul>
        <li v-for="product in data">{{ product.title }}</li>
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
  console.log('index init request')
  const { data: products, pending, status } = await useFetch(
    'https://dummyjson.com/products',
     {
        // server: false,
        default: () => [{title: 'Default index data'}],
     },
    )

  console.log('Index received data')
  console.log('status', status.value)
  console.log('products', products.value)
  return data.value = products?.value?.products ? products?.value?.products : products.value
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
