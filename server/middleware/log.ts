export default defineEventHandler((event) => {
  console.log('New request: ' + getRequestURL(event))
  // for (const [key, value] of Object.entries(event)) {
  //   console.log(key, value)
  // }
})