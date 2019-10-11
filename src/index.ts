import { server } from './app'

const app = server()

app.listen().then(({ url }) => {
  console.log(`server start at ${url}`)
})
