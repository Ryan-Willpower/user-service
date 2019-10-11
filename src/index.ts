import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req: Request, res: Response) => {
  res.send({ status: 'ok' })
})

app.listen(80, '0.0.0.0', () => {
  console.log('app start at http://localhost/')
})
