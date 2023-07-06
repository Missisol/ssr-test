export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
  }),

  actions: {
    async getBlog() {
    const [res0, res1] = await Promise.all([
      useFetch('https://nekidaem.ru/api/v2/pages/?type=blog.BlogPage&fields=*&descendant_of=3'),
      useFetch('https://nekidaem.ru/api/v2/pages/?type=blog.PostPage&fields=title,year,title_extra,promo_image,likes_count,comments_count,tags&descendant_of=3')
    ])
    console.log(res0, res1)
  },
    async getProducts() {
      const { data: products, pending, status } = await useFetch(
        'https://dummyjson.com/products',
         {
            // server: false,
            default: () => [{title: 'Default index data'}],
         },
      )
      if (status.value === 'success') {
        this.products = products.value.products
      }
    },
  }
})