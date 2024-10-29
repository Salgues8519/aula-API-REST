import 'dotenv/config'
import express, { json, Request, Response } from 'express'
import rotas from './rotas'

const app = express()

app.use(json()) //ou app.use(express.json()) middleware de JSON do express

app.use(rotas)

app.listen(process.env.PORT)
