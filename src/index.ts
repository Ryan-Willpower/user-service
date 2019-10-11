import { server } from './app'

const app = server()

app.listen(80, '0.0.0.0', () => {
  console.debug('server start at http://localhost')
})
