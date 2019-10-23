import { server } from './app'

const app = server()

app.listen({ port: 4001, host: '0.0.0.0' }).then(({ url }) => {
  console.log(`server start at ${url}`)
})
