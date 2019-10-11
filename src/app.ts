import express, { Express, Response } from 'express'
import bodyParser from 'body-parser'

export function server(): Express {
  const app = express()

  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  app.get('/', (_, res: Response) => {
    res.send({ status: 'ok' })
  })

  return app
}
