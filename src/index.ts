import 'dotenv/config'
import express, { Request, Response } from 'express'
import rotas from './rotas'

const app = express()

app.use(rotas)

app.listen(process.env.PORT)
